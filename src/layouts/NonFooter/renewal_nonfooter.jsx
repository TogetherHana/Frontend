import React from "react";
import { Outlet } from "react-router-dom";
import "./white_style.scss";

function RenewalNonFooter() {
  return (
    <div className="renewal-layout">
      <div className="root-content">
        <header></header>
        <main className="main-content">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default RenewalNonFooter;
