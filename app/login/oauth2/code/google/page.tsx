"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useSetRecoilState } from "recoil";
import { axiosInstance } from "@/api/axios";
import { isLoggedInState } from "@/atoms/authAtom";

const Page = () => {
  const router = useRouter();
  const setIsLoggedIn = useSetRecoilState(isLoggedInState);

  const setTokensInCookie = (accessToken: string, refreshToken: string) => {
    const isSecure = window.location.protocol === "https:";

    document.cookie = `access_token=${accessToken}; path=/; ${
      isSecure ? "Secure" : ""
    }; SameSite=Strict`;
    document.cookie = `refresh_token=${refreshToken}; path=/; ${
      isSecure ? "Secure" : ""
    }; SameSite=Strict`;
  };

  useEffect(() => {
    const query = new URLSearchParams(window.location.search);
    const code = query.get("google_access_token");

    const handleAuth = async () => {
      try {
        const response = await axiosInstance.post("/auth/login", code);

        if (response.status >= 200 && response.status < 300) {
          if (response.data.is_user) {
            const { accessToken, refreshToken } = response.data;

            // 쿠키에 토큰 저장
            setTokensInCookie(accessToken, refreshToken);

            setIsLoggedIn(true);
            router.push("/"); // 메인 페이지로 이동
          } else {
            router.push("/login/info"); // 추가 정보 입력 페이지로 이동
          }
        }
      } catch (error) {
        console.error("Authentication failed:", error);
        alert("로그인 처리 중 오류가 발생했습니다.");
      }
    };

    if (code) {
      handleAuth();
    } else {
      console.error("No code found in URL");
    }
  }, [router, setIsLoggedIn]);

  return <div className="h-screen">Redirecting...</div>;
};

export default Page;
