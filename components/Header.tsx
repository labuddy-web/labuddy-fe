"use client";

import Image from "next/image";
import labuddy_logo from "@/public/logo.svg";
import UserIcon from "./icons/UserIcon";
import Link from "next/link";
import { isLoggedInState } from "@/atoms/authAtom";

const Header = () => {
  const handleLogout = () => {};

  return (
    <div className="w-full h-[84px] bg-white flex items-center justify-between px-[32px] lg:px-[120px] xl:px-[320px]">
      <Link href={"/"}>
        <Image src={labuddy_logo} alt="logo" width={172} height={40} />
      </Link>
      {isLoggedInState && (
        <Link href={"/login"}>
          <div className="w-auto h-[40px] flex flex-row items-center gap-[24px] text-black">
            <UserIcon />

            <p className="hidden sm:block">log in</p>
          </div>
        </Link>
      )}
      {!isLoggedInState && (
        <div
          className="w-auto h-[40px] flex flex-row items-center gap-[24px] text-black"
          onClick={handleLogout}
        >
          <UserIcon />
          <p className="hidden sm:block text-red-500">log out</p>
        </div>
      )}
    </div>
  );
};

export default Header;
