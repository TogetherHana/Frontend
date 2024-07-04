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
// 초대링크 모달
export const inviteLinkAtom = atom(initialModalState);
// 승리팀 이벤트 선택 모달
export const selectWinTeamAtom = atom(initialModalState);

// 모임통장 회비걷기->수금요청 화면에서 캐릭터이미지key값 전달하기
export const characterAtom = atom("");

// 모임통장 회비걷기->수금요청 화면에서 금액값 전달하기
export const amountAtom = atom("");

// device Token 저장
export const deviceTokenAtom = atom("");

// access Token
export const accessTokenATom = atom("");

// 회원가입 정보
export const memberInfo = {
  name: "",
  accountNumber: "",
  phoneNumber: "",
  address: "",
  fcmToken: "",
  nickname: ""
};

export const memberAtom = atom(memberInfo);

// 본인인증 상태 유지용
export const userIdVerifiedAtom = atom(false);

// 본인인증 에러 모달용
export const authCheckAtom = atom(initialModalState);

// 계좌 연동
export const accountAtom = atom("");

// 은행 선택 모달
export const bankSelectAtom = atom(initialModalState);

// 모임통장 생성정보
export const maccountInfo = {
  sharePurpose: "",
  accountName: "",
  accountPassword: ""
};

export const maccountAtom = atom(maccountInfo);
