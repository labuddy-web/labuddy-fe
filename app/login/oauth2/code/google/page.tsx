"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useSetRecoilState } from "recoil";
import { axiosInstance } from "@/api/axios";
import { isLoggedInState } from "@/atoms/authAtom";
import { setGoogleTokenInCookie, setTokensInCookie } from "@/api/token";

const Page = () => {
  const router = useRouter();
  const setIsLoggedIn = useSetRecoilState(isLoggedInState);

  useEffect(() => {
    const query = new URLSearchParams(window.location.search);
    const code = query.get("google_access_token");

    const handleAuth = async () => {
      try {
        const response = await axiosInstance.post("/auth/login", {
          google_access_token: code,
        });

        if (response.status >= 200 && response.status < 300) {
          if (response.data.is_user) {
            const { access_token, refresh_token } = response.data;

            // 쿠키에 토큰 저장
            setTokensInCookie(access_token, refresh_token);

            router.push("/"); // 메인 페이지로 이동

            setIsLoggedIn(true);
          } else {
            // 쿠키에 구글 토큰 저장
            setGoogleTokenInCookie(code ? code : "");

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
