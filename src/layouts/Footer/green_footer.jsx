import React from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import "../NonFooter/green_style.scss";

const GreenFooter = () => {
  const locationNow = useLocation();

  return (
    <div className="green-layout">
      <main className="main-content">
        <Outlet />
      </main>
      <footer className="footer">
        <Link to="/mileage" className="nav-item">
          <div className="mileage" />
          <div
            className={
              locationNow.pathname === "/mileage"
                ? "active-nav-text"
                : "nav-text"
            }
          >
            마일리지
          </div>
        </Link>
        <Link to="/memberhome" className="nav-item">
          <div className="home" />
          <div
            className={
              locationNow.pathname === "/memberhome"
                ? "active-nav-text"
                : "nav-text"
            }
          >
            홈
          </div>
        </Link>
        <Link to="/event" className="nav-item">
          <div className="event" />
          <div
            className={
              locationNow.pathname === "/event" ? "active-nav-text" : "nav-text"
            }
          >
            이벤트
          </div>
        </Link>
      </footer>
    </div>
  );
};

export default GreenFooter;
