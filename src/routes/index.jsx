import GrayFooter from "@/layouts/Footer/gray_footer";
import GrayNonFooter from "@/layouts/NonFooter/gray_nonfooter";
import GreenNonFooter from "@/layouts/NonFooter/green_nonfooter";
import Bigmatch from "@/pages/BigMatch";
import Finish from "@/pages/BigMatch/finish";
import Voted from "@/pages/BigMatch/voted";
import Cheering from "@/pages/Cheering";
import Baseball from "@/pages/Cheering/baseball_index";
import FeeCollect from "@/pages/CollectingFee/fee_collect";
import FeeInput from "@/pages/CollectingFee/fee_input";
import Home from "@/pages/Home";
import Main from "@/pages/Main";
import Mileage from "@/pages/Mileage";
import SystemEvent from "@/pages/SystemEvent";
import Test from "@/pages/TestTest";
import React from "react";
import { createBrowserRouter } from "react-router-dom";
import CreateMatch from "@/pages/BigMatch/create";

import * as Layouts from "@/layouts";
import * as Pages from "@/pages";


const router = createBrowserRouter([
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
    element: <Layouts.RenewalNonFooter />,
    children: [
      {
        path: "/",
        children: [{ index: true, element: <Pages.Home /> }]
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
        children: [
          { index: true, element: <CreateMatch /> }              
        ]
      }, 
      {
        path: "match",
        children: [
          { index: true, element: <Bigmatch /> }, 
          { path: ":finish", element: <Finish />},       
          { path: ":complete", element: <Voted />}            
        ]
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
            element: <Pages.MacSetAccountPW title={"계좌 비밀번호 설정"} />
          }
        ]
      },
      {
        path: "setaccountpw/check",
        children: [
          {
            index: true,
            element: <Pages.MacSetAccountPW title={"계좌 비밀번호 확인"} />
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
        path: "registering",
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
        children: [{ index: true, element: <Pages.Home /> }]
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
