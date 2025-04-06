"use client";

import Image from "next/image";
import labuddy_logo from "@/public/logo.svg";
import UserIcon from "./icons/UserIcon";
import Link from "next/link";
import { authInstance } from "@/api/axios";
import Cookie from "js-cookie";
import { useIsLoggedInByCookie } from "@/api/auth";
import { useState } from "react";

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(); // Recoil 상태 업데이트 함수

  setIsLoggedIn(useIsLoggedInByCookie());

  const handleLogout = async () => {
    try {
      const response = await authInstance.post("/auth/logout", {});
      if (response.status >= 200 && response.status < 300) {
        console.log("logout success");
      }

      // 쿠키 삭제
      Cookie.remove("access_token");
      Cookie.remove("refresh_token");

      localStorage.clear();

      // recoil 상태 업데이트
      setIsLoggedIn(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="w-full h-[84px] bg-white flex items-center justify-between px-[32px] lg:px-[120px] xl:px-[320px]">
      <Link href={"/"}>
        <Image src={labuddy_logo} alt="logo" width={172} height={40} />
      </Link>
      {isLoggedIn ? (
        <div
          className="w-auto h-[40px] flex flex-row items-center gap-[24px] text-black"
          onClick={handleLogout}
        >
          <UserIcon />
          <p className="hidden sm:block text-red-500">log out</p>
        </div>
      ) : (
        <Link href={"/login"}>
          <div className="w-auto h-[40px] flex flex-row items-center gap-[24px] text-black">
            <UserIcon />
            <p>log in</p>
          </div>
        </Link>
      )}
    </div>
  );
};

export default Header;
