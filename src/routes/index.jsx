import Footer from "@/layouts/Footer";
import NonFooter from "@/layouts/NonFooter";
import Cheering from "@/pages/Cheering";
import Baseball from "@/pages/Cheering/baseball_index";
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
        ]
      },  
      {
        path: "mileage",
        children: [
          { index: true, element: <Mileage /> },         
        ]
      },      
      {
        path: "event",
        children: [
          { index: true, element: <SystemEvent /> },          
        ]
      },  
    ]
  },  
  {
    path: "/",
    element: <NonFooter />,

    children: [
      {
        path: "/choice/team",
        children: [
          { index: true, element: <Cheering /> },      
          { path: ":baseball", element: <Baseball />}    
        ]
      },  
    ]
  },  
]);

export default router;
