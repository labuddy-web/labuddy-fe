"use client";

import Image from "next/image";
import labuddy_logo from "@/public/logo.svg";
import google from "@/public/login/google.svg";
import login from "@/public/login/login.svg";
import { useEffect, useState } from "react";

const Login = () => {
  const [googleLink, setGoogleLink] = useState("");

  useEffect(() => {
    const clientId = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID;
    const redirectUri = process.env.NEXT_PUBLIC_GOOGLE_REDIRECT_URI;

    if (clientId && redirectUri) {
      const link = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${clientId}&redirect_uri=${redirectUri}&response_type=code&scope=https://www.googleapis.com/auth/userinfo.email https://www.googleapis.com/auth/userinfo.profile`;
      setGoogleLink(link);
    }
  }, []);

  return (
    <div className="flex flex-col justify-center items-center w-full max-w-[700px] h-[calc(100vh-84px)] sm:h-auto sm:mt-[120px] px-[32px] sm:px-[118px] py-[58px] gap-[24px] sm:gap-[48px] sm:rounded-3xl text-center bg-white border-t-2 sm:border-2 border-gray-400">
      <Image src={labuddy_logo} alt="labuddy" className="w-[172px] h-auto" />
      <p className="font-semibold text-3xl sm:text-5xl text-gray-800">
        랩버디 시작하기
      </p>
      <p className="font-medium text-base sm:text-lg text-gray-500">
        환영합니다! 연구자의 평생 파트너 랩버디와 함께 더욱 중요한 것에
        집중하세요
      </p>
      <div
        className="flex flex-row w-full h-[78px] px-[20px] py-[10px] justify-center items-center gap-[24px] sm:gap-[42px] rounded-[20px] border-2 border-gray-400 cursor-pointer"
        onClick={() => {
          window.location.href = googleLink;
        }}
      >
        <Image src={google} alt="google" width={58} height={58} />
        <p className="text-base lg:text-lg w-full text-start text-gray-500">
          구글로 로그인/회원가입
        </p>
      </div>
      <Image src={login} alt="login" className="w-full h-auto" />
    </div>
  );
};

export default Login;
