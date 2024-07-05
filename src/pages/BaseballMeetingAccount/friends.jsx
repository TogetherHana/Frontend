import React, { useEffect, useState } from "react";
import "./friends.scss";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useAtom } from "jotai";
import {
  inviteLinkAtom,
  sportSharingAccountFriendsAtom,
  sportSharingAccountIdxAtom
} from "@/stores";
import InviteLinkModal from "@/components/Modal/invitelinkmodal";
import MainAccountLink from "@/components/Main/mainaccountlink";
import { useQuery } from "@tanstack/react-query";

function Friends() {
  const navigate = useNavigate();
  const [members, setMembers] = useState([]);
  const [sportSharingAccountIdx] = useAtom(sportSharingAccountIdxAtom); // 모임통장 인덱스
  const [sportSharingAccountFriends, setSportSharingAccountFriends] = useAtom(
    sportSharingAccountFriendsAtom
  ); // 모임통장 모임원수
  const [inviteModalData, setInviteModalData] = useAtom(inviteLinkAtom);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const fetchMembers = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_BE_URI}/sharing-account/members?sharingAccountIdx=${sportSharingAccountIdx}`,
          {
            headers: {
              "Content-Type": "application/json"
            }
          }
        );

        console.log(response.data.data);
        setMembers(response.data.data);
      } catch (error) {
        if (error.response) {
          console.error("Response error:", error.response.data);
        } else if (error.request) {
          console.error("No response error:", error.request);
        } else {
          console.error("Axios error:", error.message);
        }
      }
    };

    fetchMembers();
  }, [sportSharingAccountIdx]); // sharingAccountIdx가 변경될 때마다 다시 데이터를 가져옴

  const leaders = members.filter((member) => member.isLeader);
  const friends = members.filter((member) => !member.isLeader);
  console.log("----모임통장 모임원의 수는?----");
  console.log(members.length);

  // @ts-ignore
  setSportSharingAccountFriends(members.length);

  const jwtToken = localStorage.getItem("jwtToken");
  console.log("---토큰값 있나?---");
  console.log(jwtToken);

  // 친구초대링크 모달띄우기
  const inviteCodeInfo = useQuery({
    queryKey: ["invite-code"],
    queryFn: async () => {
      const response = await fetch(
        `http://localhost:8080/invite/code?sharingAccountIdx=${sportSharingAccountIdx}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${jwtToken}`
          }
        }
      );
      return response.json();
    },
    enabled: isSubmitting
  });
  const handleInviteLinkModal = () => {
    // isSubmitting value add
    setIsSubmitting(true);
    setInviteModalData((prevData) => ({
      ...prevData,
      isOpen: !prevData.isOpen,
      content: <MainAccountLink code={inviteCodeInfo.data.data} />
    }));
    setIsSubmitting(false);
  };

  return (
    <>
      <div className="friend-container">
        <div className="position">총무</div>
        {leaders.map((leader) => (
          <div key={leader.memberIdx} className="leader">
            {leader.imageUrl !== null ? (
              <>
                <div className="logo-wrapper">
                  <img
                    className="cheeringTeam-img"
                    src={leader.imageUrl}
                    alt={leader.memberNickName}
                  />
                </div>
                <div className="nick-name">{leader.memberNickName}</div>
              </>
            ) : (
              <div className="nick-name">{leader.memberNickName}</div>
            )}
          </div>
        ))}
        <div className="friends-title-container">
          <div className="position">친구</div>
          <div className="additional" onClick={handleInviteLinkModal}>
            추가
          </div>
        </div>
        <div className="friends-grid">
          {friends.map((friend) => (
            <div key={friend.memberIdx} className="friend">
              {friend.imageUrl !== null ? (
                <>
                  <div className="logo-wrapper">
                    <img
                      className="cheeringTeam-img"
                      src={friend.imageUrl}
                      alt={friend.memberNickName}
                    />
                  </div>
                  <div className="nick-name">{friend.memberNickName}</div>
                </>
              ) : (
                <div className="nick-name">{friend.memberNickName}</div>
              )}
            </div>
          ))}
        </div>
      </div>
      <InviteLinkModal />
    </>
  );
}

export default Friends;
