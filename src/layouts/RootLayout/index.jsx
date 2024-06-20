import React from "react";
import { Outlet } from "react-router-dom";
import "./style.scss";

function RootLayout() {
  return (
    <div className="root-layout">
      <div className="root-content">
        <header></header>
        <main className="main-content">
          <Outlet />
        </main>
      </div>
      <footer className="footer">
        <Outlet />
      </footer>
    </div>
  );
}

export default RootLayout;
