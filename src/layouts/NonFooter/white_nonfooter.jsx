import React from "react";
import { Outlet } from "react-router-dom";
import "./gray_style.scss";

function WhiteNonFooter() {
  return (
    <div className="white-layout">
      <div className="root-content">
        <header></header>
        <main className="main-content">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default WhiteNonFooter;
