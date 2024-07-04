import React from "react";

function TermsDiv() {
  return (
    <div className="termsDiv">
      <div className="title">모임통장 서비스 이용 약관</div>
      <div className="detail">
        <div className="content">
          <div className="title">제1조 목적</div>
          <div>
            본 약관은 주식회사 하나은행(이하 “은행”이라 함)이 모임통장 서비스
            이용 고객(이하 “이용자”라 함)에게 제공하는 모임 서비스의 이용과
            관련하여, 은행과 이용자간 또는 이용자 간의 권리와 의 무, 책임사항,
            서비스 이용조건, 절차 및 기타 제반사항에 대해 정하는 것을 목적으로
            합니다
          </div>
        </div>
        <div className="content">
          <div className="title">제2조 용어의 정의</div>
          <div>
            ① “하나원큐 앱”이라 함은 스마트폰, 태블릿 PC 등 모바일기기에서
            실행되는 응용소프트웨어로서 은행이 뱅킹서비스를 위하여 제공하는
            모바일 애플리케이션을 말합니다.
            <br /> ② “모임통장 서비스(이하 “모임서비스”)”라 함은 하나원큐 앱을
            통해 모임서비스 연결계좌의 잔액 조회, 회비내역 조회, 출금내역 조회
            및 모임원 관리 등의 모임 관련 기능을 제공하는 서비스 를 말합니다.{" "}
            <br />③ “총무”라 함은 하나원큐 앱에 회원가입을 하고 은행에 본인
            명의의 입출금계좌를 보유한 고객 이 자신의 계좌를 연결하여 모임을
            개설하고 모임서비스 이용약관에 동의한 경우 해당 모임을 개설한 고객
            또는 모임원 중 한 명으로서 총무로부터 권한을 위임받고 자신의 계좌를
            연결한 고객을 말합니다
          </div>
        </div>
      </div>
    </div>
  );
}

export default TermsDiv;
