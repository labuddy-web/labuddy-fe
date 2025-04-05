"use client";

import { useState } from "react";
import TextInput from "@/components/Input";
import { axiosInstance } from "@/api/axios";
import { useSetRecoilState } from "recoil";
import { isLoggedInState } from "@/atoms/authAtom";
import { setTokensInCookie } from "@/api/token";

const Join = () => {
  const [phoneNum, setPhoneNum] = useState<string>("");
  const setIsLoggedIn = useSetRecoilState(isLoggedInState);

  const handleSubmit = async () => {
    try {
      const response = await axiosInstance.post("/auth/signup", {
        phoneNum,
      });

      if (response.status >= 200 && response.status < 300) {
        setIsLoggedIn(true); // recoil login 상태 업데이트

        const { access_token, refresh_token } = response.data;

        // 쿠키에 토큰 저장
        setTokensInCookie(access_token, refresh_token);
      }
    } catch (error) {
      console.error("회원가입 실패:", error);
    }
  };
  return (
    <div className="flex flex-col justify-center items-center w-full max-w-[700px] h-[calc(100vh-84px)] sm:h-auto sm:max-h-[400px] px-[32px] sm:px-[118px] py-[58px] gap-[24px] sm:gap-[48px] sm:rounded-3xl text-center text-white bg-gray-800">
      <p className="font-semibold text-3xl sm:text-5xl">JOIN</p>
      <div className="flex flex-row w-full h-[78px] px-[20px] py-[10px] justify-center items-center gap-[42px] rounded-[20px] bg-black cursor-pointer">
        <TextInput data={phoneNum} setData={setPhoneNum} />
      </div>
      <button
        className={`flex w-[200px] h-[60px] justify-center items-center text-center rounded-[12px] text-base lg:text-lg ${
          phoneNum
            ? "bg-blue text-white"
            : "bg-gray-200/60 text-white cursor-not-allowed"
        }`}
        disabled={!phoneNum}
        onClick={handleSubmit}
      >
        join
      </button>
    </div>
  );
};

export default Join;
