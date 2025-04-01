"use client";

import Image from "next/image";
import google from "@/public/login/google.svg";

const Login = () => {
  const google_link = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID}&redirect_uri=${process.env.NEXT_PUBLIC_GOOGLE_REDIRECT_URI}&response_type=code&scope=https://www.googleapis.com/auth/userinfo.email https://www.googleapis.com/auth/userinfo.profile`;

  return (
    <div className="flex flex-col justify-center items-center w-full max-w-[700px] h-[calc(100vh-84px)] sm:h-auto sm:max-h-[360px] px-[32px] sm:px-[118px] py-[58px] gap-[24px] sm:gap-[48px] sm:rounded-3xl text-center text-white bg-gray-800">
      <p className="font-semibold text-3xl sm:text-5xl">LOGIN</p>
      <div
        className="flex flex-row w-full h-[78px] px-[20px] py-[10px] justify-center items-center gap-[24px] sm:gap-[42px] rounded-[20px] bg-black cursor-pointer"
        onClick={() => {
          window.location.href = google_link;
        }}
      >
        <Image src={google} alt="google" width={58} height={58} />
        <p className="text-base lg:text-lg w-full text-start">
          구글로 로그인하기
        </p>
      </div>
    </div>
  );
};

export default Login;
