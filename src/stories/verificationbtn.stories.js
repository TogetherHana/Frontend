import VerificationBtn from "./verificationbtn";
import { fn } from "@storybook/test";

export default {
  title: "Example/Register",
  component: VerificationBtn,
  tags: ["autodocs"],
  parameters: {
    layouts: "fullscreen"
  },
  args: {
    onClick: fn()
  }
};

//  btnText, btnBelowText, onClick, cnm
export const AgreeTerms = {
  args: {
    params: {
      btnText: "확인했어요",
      btnBelowText: "다음에 할게요",
      cnm: "detail"
    }
  }
};

export const RegisterComplete = {
  args: {
    params: {
      btnText: "메인화면으로",
      btnBelowText: "만든 계좌 바로 확인하러 가기"
    }
  }
};

export const CreatedInfo = {
  args: {
    params: {
      btnText: "계좌 개설하기",
      btnBelowText: "다시 입력하기"
    }
  }
};

export const IdCertification = {
  args: {
    params: {
      btnText: "확인",
      btnBelowText: "다시 조회하기 😂"
    }
  }
};
