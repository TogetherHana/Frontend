import React from "react";
import { createBrowserRouter } from "react-router-dom";
import * as Layouts from "@/layouts";
import * as Pages from "@/pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layouts.GrayFooter />,

    children: [
      {
        path: "/",
        children: [{ index: true, element: <Pages.Home /> }]
      },
      {
        path: "mileage",
        children: [{ index: true, element: <Pages.Mileage /> }]
      },
      {
        path: "event",
        children: [{ index: true, element: <Pages.SystemEvent /> }]
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
        path: "maccount/register",
        children: [
          { index: true, element: <Pages.Register /> },
          { path: ":testId", element: <Pages.Main /> }
        ]
      },
      {
        path: "maccount/idverification",
        children: [{ index: true, element: <Pages.IdVerification /> }]
      },
      {
        path: "maccount/userinfo",
        children: [{ index: true, element: <Pages.UserInfo /> }]
      },
      {
        path: "maccount/selectstock",
        children: [{ index: true, element: <Pages.SelectStock /> }]
      },
      {
        path: "maccount/agreeterms",
        children: [{ index: true, element: <Pages.AgreeTerms /> }]
      },
      {
        path: "maccount/setaccountname",
        children: [{ index: true, element: <Pages.SetAccountName /> }]
      },
      {
        path: "maccount/setaccountpw",
        children: [
          {
            index: true,
            element: <Pages.SetAccountPW title={"계좌 비밀번호 설정"} />
          }
        ]
      },
      {
        path: "maccount/setaccountpw/check",
        children: [
          {
            index: true,
            element: <Pages.SetAccountPW title={"계좌 비밀번호 확인"} />
          }
        ]
      },
      {
        path: "maccount/createdinfo",
        children: [
          {
            index: true,
            element: <Pages.CreatedInfo />
          }
        ]
      },
      {
        path: "maccount/complete",
        children: [
          {
            index: true,
            element: <Pages.MAccountComplete />
          }
        ]
      },
      {
        path: "platform/join/main",
        children: [
          {
            index: true,
            element: <Pages.JoinMain />
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
  }
]);

export default router;
