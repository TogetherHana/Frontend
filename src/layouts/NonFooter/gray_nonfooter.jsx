import React from "react";
import { Outlet } from "react-router-dom";
import "./gray_style.scss";

function GrayNonFooter() {
  return (
    <div className="gray-layout">
      <div className="root-content">
        <header></header>
        <main className="main-content">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default GrayNonFooter;
