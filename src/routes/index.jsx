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


const router = createBrowserRouter([
  {
    path: "/",
    element: <GrayFooter />,

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
    element: <GrayNonFooter />,

    children: [
      {
        path: "choice/team",
        children: [
          { index: true, element: <Cheering /> },      
          { path: ":baseball", element: <Baseball />}    
        ]
      },        
      {
        path: "match",
        children: [
          { index: true, element: <Bigmatch /> },      
          { path: ":complete", element: <Voted />},
          { path: ":finish", element: <Finish />}    
        ]
      },     
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
          { path: ":collect", element: <FeeCollect />}    
        ]
      },  
    ]
  },  
]);

export default router;
