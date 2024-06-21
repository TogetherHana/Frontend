import Footer from "@/layouts/Footer";
import NonFooter from "@/layouts/NonFooter";
import Home from "@/pages/Home";
import Main from "@/pages/Main";
import IdVerification from "@/pages/MeetingAccount/idverification";
import Register from "@/pages/MeetingAccount/register";
import Mileage from "@/pages/Mileage";
import SystemEvent from "@/pages/SystemEvent";
import UserInfo from "@/pages/MeetingAccount/userinfo";
import React from "react";
import { createBrowserRouter } from "react-router-dom";
import SelectStock from "@/pages/MeetingAccount/selectstock";
import AgreeTerms from "@/pages/MeetingAccount/agreeterms";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Footer />,

    children: [
      {
        path: "/",
        children: [
          { index: true, element: <Home /> },
          { path: ":testId", element: <Main /> }
        ]
      },
      {
        path: "mileage",
        children: [
          { index: true, element: <Mileage /> },
          { path: ":testId", element: <Main /> }
        ]
      },
      {
        path: "event",
        children: [
          { index: true, element: <SystemEvent /> },
          { path: ":testId", element: <Main /> }
        ]
      }
    ]
  },
  {
    path: "/",
    element: <NonFooter />,

    children: [
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
      }
    ]
  }
]);

export default router;
