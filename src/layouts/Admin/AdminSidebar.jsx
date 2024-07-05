import React, { useEffect, useState } from "react";
import { Sidebar } from "flowbite-react";
import {
  HiPresentationChartBar,
  HiClipboard,
  HiEmojiHappy,
  HiChatAlt,
  HiMail,
  HiMailOpen
} from "react-icons/hi";
import { Link, useLocation } from "react-router-dom";
import hanaLogo from "@/assets/images/hana.svg";

const AdminSidebar = () => {
  const location = useLocation();  

  return (
    <Sidebar>
      <Sidebar.Logo
        img={hanaLogo}
        imgAlt="Hana logo"
        className="mt-4 mb-6 ml-8"
      ></Sidebar.Logo>
      <Sidebar.Items>
        <Sidebar.ItemGroup>
          <div className="flex flex-col items-center p-4 ">
            <div className="relative w-10 h-10 overflow-hidden mb-4 bg-hanaGreen/10 rounded-full dark:bg-gray-600">
              <svg
                className="absolute w-12 h-12 text-hanaGreen -left-1"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </div>
            <h3 className="font-noto text-hanaGreen text-2xl">
              <span className="font-bold">관리자</span>님
            </h3>
            <p className="font-noto text-gray-500">함께, 하나 소속</p>
            <button
              type="button"
              // onClick={handleLogout}
              className="w-full my-4 text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
            >
              로그아웃
            </button>
          </div>
          <hr />
          <Sidebar.Item
            as={Link}
            to="/admin/maccountStats"
            icon={HiPresentationChartBar}
            labelColor="dark"
            className="my-4"
            style={{
              fontWeight:
                location.pathname === "/admin/maccountStats" ? "bold" : "normal"
            }}
          >
            모임통장
          </Sidebar.Item>
          <Sidebar.Item
            as={Link}
            to="/admin/event"
            icon={HiEmojiHappy}
            labelColor="red"
            className="my-4"
            style={{
              fontWeight:
                location.pathname === "/admin/event" ? "bold" : "normal"
            }}
          >
            이벤트
          </Sidebar.Item>          
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
  );
};

export default AdminSidebar;
