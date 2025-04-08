"use client";

import { useState, useEffect } from "react";
import { Navbar, NavbarContent, NavbarItem } from "@heroui/navbar";
import Link from "next/link";
import UserList from "./UserList";
import PaperList from "./PaperList";
import { authInstance } from "@/api/axios";

const fetchAdminData = async () => {
  try {
    const response = await authInstance.get("/admin/summary");

    if (response.status >= 200 && response.status < 300) {
      console.log("검색 성공", response.data);

      const users = response.data?.results?.users ?? [];
      const papers = response.data?.results?.papers ?? [];

      // user list를 localStorage에 저장
      localStorage.setItem("userList", JSON.stringify(users));
      // paper list를 localStorage에 저장
      localStorage.setItem("paperList", JSON.stringify(papers));
    } else {
      console.error("검색 실패:", response.statusText);
      alert("검색 실패");
    }
  } catch (error) {
    console.error("오류 발생:", error);
    alert("검색 중 오류 발생");
  }
};

const AdminPage = () => {
  // 활성화된 탭을 추적하는 state
  const [activeTab, setActiveTab] = useState("users");

  // 탭을 클릭했을 때 활성화된 탭을 변경하는 함수
  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };

  useEffect(() => {
    fetchAdminData();
  }, []);

  return (
    <div className="flex flex-col w-full h-auto min-h-[calc(100vh-84px)] px-[32px] lg:px-[120px] xl:px-[320px] justify-start items-center">
      <div className="flex h-[80px] gap-[20px] text-lg md:text-2xl lg:text-3xl">
        <Navbar>
          <NavbarContent className="flex gap-4" justify="center">
            <NavbarItem onClick={() => handleTabClick("users")}>
              <Link color="foreground" href="#">
                Users
              </Link>
            </NavbarItem>
            <NavbarItem
              onClick={() => handleTabClick("papers")}
              isActive={activeTab === "papers"}
            >
              <Link aria-current="page" href="#">
                Papers
              </Link>
            </NavbarItem>
          </NavbarContent>
        </Navbar>
      </div>
      <div className="flex w-full">
        {/* 활성화된 탭에 맞는 컴포넌트 렌더링 */}
        {activeTab === "users" && <UserList />}
        {activeTab === "papers" && <PaperList />}
      </div>
    </div>
  );
};

export default AdminPage;
