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
import IdVerification from "@/pages/MeetingAccount/idverification";
import Register from "@/pages/MeetingAccount/register";
import Mileage from "@/pages/Mileage";
import SystemEvent from "@/pages/SystemEvent";
import Test from "@/pages/TestTest";
import UserInfo from "@/pages/MeetingAccount/userinfo";
import React from "react";
import { createBrowserRouter } from "react-router-dom";
import SelectStock from "@/pages/MeetingAccount/selectstock";
import AgreeTerms from "@/pages/MeetingAccount/agreeterms";
import SetAccountName from "@/pages/MeetingAccount/setaccountname";
import SetAccountPW from "@/pages/MeetingAccount/setaccountpw";
import CreatedInfo from "@/pages/MeetingAccount/createdinfo";
import MAccountComplete from "@/pages/MeetingAccount/maccountcomplete";
import CreateMatch from "@/pages/BigMatch/create";

const router = createBrowserRouter([
  {
    path: "/",
    element: <GrayFooter />,

    children: [
      {
        path: "/",
        children: [{ index: true, element: <Home /> }]
      },
      {
        path: "mileage",
        children: [{ index: true, element: <Mileage /> }]
      },
      {
        path: "event",
        children: [{ index: true, element: <SystemEvent /> }]
      }
    ]
  },
  {
    path: "/",
    element: <GrayNonFooter />,

    children: [
      {
        path: "choice/team",
        children: [
          { index: true, element: <Cheering /> },
          { path: ":baseball", element: <Baseball /> }
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
        path: "maccount/register",
        children: [
          { index: true, element: <Register /> },
          { path: ":testId", element: <Main /> }
        ]
      },
      {
        path: "maccount/idverification",
        children: [
          { index: true, element: <IdVerification /> },
          { path: ":testId", element: <Main /> }
        ]
      },
      {
        path: "maccount/userinfo",
        children: [
          { index: true, element: <UserInfo /> },
          { path: ":testId", element: <Main /> }
        ]
      },
      {
        path: "maccount/selectstock",
        children: [
          { index: true, element: <SelectStock /> },
          { path: ":testId", element: <Main /> }
        ]
      },
      {
        path: "maccount/agreeterms",
        children: [
          { index: true, element: <AgreeTerms /> },
          { path: ":testId", element: <Main /> }
        ]
      },
      {
        path: "maccount/setaccountname",
        children: [
          { index: true, element: <SetAccountName /> },
          { path: ":testId", element: <Main /> }
        ]
      },
      {
        path: "maccount/setaccountpw",
        children: [
          {
            index: true,
            element: <SetAccountPW title={"계좌 비밀번호 설정"} />
          },
          { path: ":testId", element: <Main /> }
        ]
      },
      {
        path: "maccount/setaccountpw/check",
        children: [
          {
            index: true,
            element: <SetAccountPW title={"계좌 비밀번호 확인"} />
          },
          { path: ":testId", element: <Main /> }
        ]
      },
      {
        path: "maccount/createdinfo",
        children: [
          {
            index: true,
            element: <CreatedInfo />
          },
          { path: ":testId", element: <Main /> }
        ]
      },
      {
        path: "maccount/complete",
        children: [
          {
            index: true,
            element: <MAccountComplete />
          },
          { path: ":testId", element: <Main /> }
        ]
      }
    ]
  },
  {
    path: "/",
    element: <GreenNonFooter />,

    children: [
      {
        path: "fee",
        children: [
          { index: true, element: <FeeInput /> },
          { path: ":collect", element: <FeeCollect /> }
        ]
      }
    ]
  }
]);

export default router;
