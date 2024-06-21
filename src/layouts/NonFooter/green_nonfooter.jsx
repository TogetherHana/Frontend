import React from "react";
import { Outlet } from "react-router-dom";
import "./green_style.scss";

function GreenNonFooter() {
  return (
    <div className="green-layout">
      <div className="root-content">
        <header></header>
        <main className="main-content">
          <Outlet />
        </main>
      </div>      
    </div>
  );
}

export default GreenNonFooter;
