
import { atom } from "jotai";



// 모달 초기 상태 정의
export const initialModalState = {
  isOpen: false,
  children: null,
  content: null,
  confirmButtonText: "Confirm",
  onClickConfirm: null
};
//모달
export const globalModalAtom = atom(initialModalState);
//비번 요청 시 떠야하는 모달
export const passwordRequestlModalAtom = atom(initialModalState);
//메시지 모달
export const messageModalAtom = atom(initialModalState);

