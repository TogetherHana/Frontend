import Footer from "@/layouts/Footer";
import RootLayout from "@/layouts/RootLayout";
import Home from "@/pages/Home";
import Main from "@/pages/Main";
import Mileage from "@/pages/Mileage";
import SystemEvent from "@/pages/SystemEvent";
import React from "react";
import { createBrowserRouter } from "react-router-dom";


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
      },  
    ]
  },  
  // {
  //   path: "/",
  //   element: <RootLayout />,

  //   children: [{ index: true, element: <Main/> }]
  // },  
]);

export default router;
