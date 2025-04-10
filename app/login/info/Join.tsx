"use client";

import { useEffect, useState } from "react";
import TextInput from "@/components/Input";
import { axiosInstance } from "@/api/axios";
import { setTokensInCookie } from "@/api/token";
import Cookie from "js-cookie";
import { useRouter } from "next/navigation";
import { useAuth } from "@/atoms/AuthContext";

const Join = () => {
  const { login } = useAuth();
  const router = useRouter();
  const [phoneNum, setPhoneNum] = useState<string>("");
  const [path, setPath] = useState<string>("");

  // cookie에서 구글 토큰 확인
  const [googleAccessToken, setGoogleAccessToken] = useState<
    string | undefined
  >("");

  useEffect(() => {
    const storedPath = localStorage.getItem("path") || "unknown";
    const token = Cookie.get("google_access_token");
    setPath(storedPath);
    setGoogleAccessToken(token);
  }, []);

  const handleSubmit = async () => {
    try {
      const response = await axiosInstance.post("/auth/signup", {
        google_access_token: googleAccessToken,
        phone_number: phoneNum,
        source_path: path,
      });

      if (response.status >= 200 && response.status < 300) {
        login();

        // 쿠키 삭제
        Cookie.remove("google_access_token");

        // 쿠키에 토큰 저장
        const { access_token, refresh_token } = response.data;
        setTokensInCookie(access_token, refresh_token);

        router.refresh();

        // "/" 또는 "/path"로 redirect
        const path = localStorage.getItem("path") || "";
        router.push(`/${path}`);
        localStorage.removeItem("path");
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
