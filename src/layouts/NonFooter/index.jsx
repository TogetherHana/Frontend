import React from "react";
import { Outlet } from "react-router-dom";
import "./style.scss";

function NonFooter() {
  return (
    <div className="root-layout">
      <div className="root-content">
        <header></header>
        <main className="main-content">
          <Outlet />
        </main>
      </div>      
    </div>
  );
}

export default NonFooter;
