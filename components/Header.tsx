"use client";

import Image from "next/image";
import labuddy_logo from "@/public/logo.svg";
import Link from "next/link";
import { authInstance } from "@/api/axios";
import Cookie from "js-cookie";
import { useAuth } from "@/atoms/AuthContext";

const Header = () => {
  const { isLoggedIn, logout } = useAuth();

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

      //logout 전역 상태 업데이트
      logout();
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
          className="w-auto h-[40px] flex flex-row items-center gap-[24px] text-black cursor-pointer"
          onClick={handleLogout}
        >
          <p className="text-red-500">로그아웃</p>
        </div>
      ) : (
        <Link href={"/login"}>
          <div className="w-auto h-[40px] flex flex-row items-center gap-[24px] text-black cursor-pointer">
            <p>로그인</p>
          </div>
        </Link>
      )}
    </div>
  );
};

export default Header;
