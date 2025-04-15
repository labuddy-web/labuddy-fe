"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { axiosInstance } from "@/api/axios";
import { setTokensInCookie } from "@/api/token";
import { useAuth } from "@/atoms/AuthContext";

const Page = () => {
  const { login } = useAuth();
  const router = useRouter();

  useEffect(() => {
    const query = new URLSearchParams(window.location.search);
    const code = query.get("google_access_token");

    const handleAuth = async () => {
      const sourcePath = localStorage.getItem("path") || "unknown";

      try {
        const response = await axiosInstance.post("/auth/login", {
          google_access_token: code,
          source_path: sourcePath,
        });

        if (response.status >= 200 && response.status < 300) {
          login();

          const { access_token, refresh_token } = response.data;

          setTokensInCookie(access_token, refresh_token);

          // redirect to stored path or home
          const redirectPath = sourcePath === "searching" ? "/searching" : "/";
          localStorage.removeItem("path");
          router.push(redirectPath);

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
