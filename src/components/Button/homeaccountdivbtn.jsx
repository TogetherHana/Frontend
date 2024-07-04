import { accountAtom, inviteLinkAtom } from "@/stores";
import { useAtom } from "jotai";
import React, { useState } from "react";
import InviteLinkModal from "../Modal/invitelinkmodal";
import MainAccountLink from "../Main/mainaccountlink";
import { useQuery, useQueryClient } from "@tanstack/react-query";

function HomeAccountDivBtn({ params }) {
  // const qc = useQueryClient();
  const [accessToken, setAccessToken] = useAtom(accountAtom);
  const [inviteModalData, setInviteModalData] = useAtom(inviteLinkAtom);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const inviteCodeInfo = useQuery({
    queryKey: ["invite-code"],
    queryFn: async () => {
      const response = await fetch(
        `http://localhost:8080/invite/code?sharingAccountIdx=${params.idx}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${accessToken}`
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
      <div
        className={`mainAccountDivBtn ${params.cnm}`}
        onClick={() => handleInviteLinkModal()}
      >
        <div>{params.content}</div>
      </div>
      <InviteLinkModal />
    </>
  );
}

export default HomeAccountDivBtn;
