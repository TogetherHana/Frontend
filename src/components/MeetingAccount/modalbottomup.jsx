import React from "react";
import { Sheet } from "react-modal-sheet";

function ModalBottomUp({ isPopupOpen, onClose, snapPoints, content }) {
  return (
    <Sheet isOpen={isPopupOpen} onClose={onClose} snapPoints={snapPoints}>
      <Sheet.Container>
        {/* <Sheet.Header /> */}
        <Sheet.Content>{content}</Sheet.Content>
      </Sheet.Container>
      {/* 현재 popup 강조 */}
      <Sheet.Backdrop />
    </Sheet>
  );
}

export default ModalBottomUp;
