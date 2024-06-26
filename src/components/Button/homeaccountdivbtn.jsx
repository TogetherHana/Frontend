import { inviteLinkAtom } from "@/stores";
import { useAtom } from "jotai";
import React from "react";
import InviteLinkModal from "../Modal/invitelinkmodal";
import MainAccountLink from "../Main/mainaccountlink";

function HomeAccountDivBtn({ content, cnm }) {
  const [inviteModalData, setInviteModalData] = useAtom(inviteLinkAtom);
  const handleInviteLinkModal = () => {
    setInviteModalData((prevData) => ({
      ...prevData,
      isOpen: !prevData.isOpen,
      content: <MainAccountLink />
    }));
  };

  return (
    <>
      <div
        className={`mainAccountDivBtn ${cnm}`}
        onClick={() => handleInviteLinkModal()}
      >
        <div>{content}</div>
      </div>
      <InviteLinkModal />
    </>
  );
}

export default HomeAccountDivBtn;
