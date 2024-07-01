import React, { useEffect, useState } from "react";
import "./friends.scss";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Friends() {
  const navigate = useNavigate();
  const [members, setMembers] = useState([]);
  const sharingAccountIdx = 1; // 모임통장 인덱스 값

  useEffect(() => {
    const fetchMembers = async () => {
      try {
        const response = await axios.get(
          `http://127.0.0.1:8080/sharing-account/members?sharingAccountIdx=${sharingAccountIdx}`,
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
  }, [sharingAccountIdx]); // sharingAccountIdx가 변경될 때마다 다시 데이터를 가져옴

  const leaders = members.filter((member) => member.isLeader);
  const friends = members.filter((member) => !member.isLeader);

  return (
    <>
      <div className="friend-container">
        <div className="position">총무</div>
        {leaders.map((leader) => (
          <div key={leader.memberIdx} className="leader">
            <div className="logo-wrapper">
              <img
                className="cheeringTeam-img"
                src={leader.imageUrl}
                alt={leader.memberNickName}
              />
            </div>
            <div className="name">{leader.memberNickName}</div>
          </div>
        ))}
        <div className="friends-title-container">
          <div className="position">친구</div>
          <div className="additional" onClick={()=>navigate("/")}>추가</div>
        </div>
        <div className="friends-grid">
          {friends.map((friend) => (
            <div key={friend.memberIdx} className="friend">
              <div className="logo-wrapper">
                <img
                  className="cheeringTeam-img"
                  src={friend.imageUrl}
                  alt={friend.memberNickName}
                />
              </div>
              <div className="name">{friend.memberNickName}</div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Friends;
