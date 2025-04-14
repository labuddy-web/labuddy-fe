"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { axiosInstance } from "@/api/axios";
import { setTokensInCookie } from "@/api/token";
import { useAuth } from "@/atoms/AuthContext";

const Page = () => {
  const { login } = useAuth();
  const router = useRouter();
  const [path, setPath] = useState<string>("unknown");

  useEffect(() => {
    const storedPath = localStorage.getItem("path") || "unknown";
    const query = new URLSearchParams(window.location.search);
    const code = query.get("google_access_token");
    setPath(storedPath);

    const handleAuth = async () => {
      try {
        const response = await axiosInstance.post("/auth/login", {
          google_access_token: code,
          source_path: path,
        });

        if (response.status >= 200 && response.status < 300) {
          login();

          const { access_token, refresh_token } = response.data;

          // 쿠키에 토큰 저장
          setTokensInCookie(access_token, refresh_token);

          // "/" 또는 "/path"로 redirect
          const path =
            localStorage.getItem("path") == "searching" ? "searching" : "";
          router.push(`/${path}`);
          localStorage.removeItem("path");

          router.refresh();
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
  }, [router, login]);

  return (
    <div className="h-[calc(100vh-84px)] w-screen justify-center items-center content-center text-center">
      Redirecting...
    </div>
  );
};

export default Page;
