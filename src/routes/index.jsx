import React from "react";
import { createBrowserRouter } from "react-router-dom";

import * as Layouts from "@/layouts";
import * as Pages from "@/pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layouts.RenewalNonFooter />,
    children: [
      {
        path: "memberhome",
        children: [{ index: true, element: <Pages.Home /> }]
      }
    ]
  },
  {
    path: "/",
    element: <Layouts.WhiteFooter />,
    children: [
      // {
      //   path: "/",
      //   children: [{ index: true, element: <Pages.Home /> }]
      // },
      {
        path: "event",
        children: [{ index: true, element: <Pages.SystemEvent /> }]
      },
      {
        path: "mileage",
        children: [{ index: true, element: <Pages.Mileage /> }]
      },
      {
        path: "event/selectwin/baseball",
        children: [{ index: true, element: <Pages.SystemEventSelectWinB /> }]
      }
    ]
  },
  {
    path: "/",
    element: <Layouts.GreenFooter />,

    children: [
      {
        path: "baseball/home",
        children: [{ index: true, element: <Pages.BaseballHome /> }]
      },
      {
        path: "history",
        children: [{ index: true, element: <Pages.History /> }]
      },
      {
        path: "friends",
        children: [{ index: true, element: <Pages.Friends /> }]
      },
      {
        path: "match/history",
        children: [{ index: true, element: <Pages.BigmatchHistory /> }]
      }
    ]
  },
  {
    path: "/",
    element: <Layouts.GrayNonFooter />,

    children: [
      {
        path: "choice/team",
        children: [
          { index: true, element: <Pages.Cheering /> },
          { path: ":baseball", element: <Pages.Baseball /> }
        ]
      },
      {
        path: "create/match",
        children: [{ index: true, element: <Pages.CreateMatch /> }]
      },
      {
        path: "match",
        children: [
          { index: true, element: <Pages.Bigmatch /> },
          { path: ":finish", element: <Pages.Finish /> }
        ]
      },
      {
        path: "choose/loser",
        children: [{ index: true, element: <Pages.Voted /> }]
      },
      {
        path: "platform/join/idverification",
        children: [
          {
            index: true,
            element: <Pages.JoinIdVerification />
          }
        ]
      },
      {
        path: "platform/join/accountlink",
        children: [{ index: true, element: <Pages.JoinAccountLink /> }]
      },
      {
        path: "platform/join/authentication/check",
        children: [{ index: true, element: <Pages.JoinAuthenticationCheck /> }]
      },
      {
        path: "platform/join/setnickname",
        children: [{ index: true, element: <Pages.JoinSetNickName /> }]
      }
    ]
  },
  {
    path: "/maccount/register",
    element: <Layouts.GrayNonFooter />,
    children: [
      {
        path: "",
        children: [
          { index: true, element: <Pages.MacRegister /> },
          { path: ":testId", element: <Pages.Main /> }
        ]
      },
      {
        path: "idverification",
        children: [{ index: true, element: <Pages.MacIdVerification /> }]
      },
      {
        path: "userinfo",
        children: [{ index: true, element: <Pages.MacUserInfo /> }]
      },
      {
        path: "selectstock",
        children: [{ index: true, element: <Pages.MacSelectStock /> }]
      },
      {
        path: "agreeterms",
        children: [{ index: true, element: <Pages.MacAgreeTerms /> }]
      },
      {
        path: "setaccountname",
        children: [{ index: true, element: <Pages.MacSetAccountName /> }]
      },
      {
        path: "setaccountpw",
        children: [
          {
            index: true,
            element: (
              <Pages.MacSetAccountPW
                title={"계좌 비밀번호 설정"}
                config={"check"}
              />
            )
          }
        ]
      },
      {
        path: "setaccountpw/check",
        children: [
          {
            index: true,
            element: (
              <Pages.MacSetAccountPWCheck
                title={"계좌 비밀번호 확인"}
                config={"create"}
              />
            )
          }
        ]
      },
      {
        path: "createdinfo",
        children: [
          {
            index: true,
            element: <Pages.MacCreatedInfo />
          }
        ]
      },
      {
        path: "processing",
        children: [
          {
            index: true,
            element: <Pages.MacRegisterProcessing />
          }
        ]
      },
      {
        path: "complete",
        children: [
          {
            index: true,
            element: <Pages.MacComplete />
          }
        ]
      }
    ]
  },
  {
    path: "/",
    element: <Layouts.GreenNonFooter />,

    children: [
      {
        path: "fee",
        children: [
          { index: true, element: <Pages.FeeInput /> },
          { path: ":collect", element: <Pages.FeeCollect /> }
        ]
      },
      {
        path: "send",
        children: [
          { index: true, element: <Pages.FeeSend /> },
          { path: ":amount", element: <Pages.SendFeeInput /> }
        ]
      },
      {
        path: "send/amount/pwcheck",
        children: [
          { index: true, element: <Pages.SendPWcheck/> },          
        ]
      }
    ]
  },
  {
    path: "/maccount/invitecode",
    element: <Layouts.WhiteNonFooter />,
    children: [
      {
        path: "",
        children: [{ index: true, element: <Pages.MacIcMain /> }]
      },
      {
        path: "agreeterms",
        children: [{ index: true, element: <Pages.MacIcAgreeTerms /> }]
      },
      {
        path: "processing",
        children: [{ index: true, element: <Pages.MacIcRegistering /> }]
      },
      {
        path: "complete",
        children: [{ index: true, element: <Pages.MacIcComplete /> }]
      }
    ]
  },
  {
    path: "/",
    element: <Layouts.WhiteNonFooter />,
    children: [
      {
        path: "/",
        children: [{ index: true, element: <Pages.Main /> }]
      },
      {
        path: "platform/join/main",
        children: [{ index: true, element: <Pages.JoinMain /> }]
      },
      {
        path: "platform/join/intro",
        children: [{ index: true, element: <Pages.JoinIntro /> }]
      },
      {
        path: "platform/request/notification",
        children: [{ index: true, element: <Pages.NotificationRequest /> }]
      },
      {
        path: "platform/join/infocheck",
        children: [{ index: true, element: <Pages.JoinInfoCheck /> }]
      },
      {
        path: "platform/join/processing",
        children: [{ index: true, element: <Pages.JoinRegisterProcessing /> }]
      },
      {
        path: "platform/join/complete",
        children: [{ index: true, element: <Pages.JoinComplete /> }]
      },
      {
        path: "event/selectwin",
        children: [{ index: true, element: <Pages.SystemEventSelectWin /> }]
      }
    ]
  }
]);

export default router;
