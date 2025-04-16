"use client";

import { authInstance } from "@/api/axios";
import BeakerIcon from "@/components/icons/BeakerIcon";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const SearchingPage = () => {
  const router = useRouter();
  const [sessionId, setSessionId] = useState<string>();

  const handleSearch = async (sessionId: string | undefined) => {
    try {
      const response = await authInstance.get(`/analyze/result/${sessionId}`);

      if (response.status >= 200 && response.status < 300) {
        // paperName를 localStorage에 저장
        localStorage.setItem(
          "paperName",
          JSON.stringify(response.data.paper_name)
        );

        // results를 localStorage에 저장
        localStorage.setItem(
          "searchResults",
          JSON.stringify(response.data.results)
        );

        // 3초 후 `/result` 페이지로 이동
        setTimeout(() => {
          router.push("/result");
        }, 3000);
      } else {
        console.error("검색 실패:", response.statusText);
        alert("검색 실패");
      }
    } catch (error) {
      console.error("오류 발생:", error);
      alert("검색 중 오류 발생");
    }
  };

  useEffect(() => {
    // localStorage에서 sessionId 불러오기
    const storedSessionId = localStorage.getItem("sessionId");
    if (storedSessionId) {
      setSessionId(JSON.parse(storedSessionId));
    }
  }, [router]);

  useEffect(() => {
    if (sessionId) {
      handleSearch(sessionId);
    }
  }, [sessionId]);

  return (
    <div className="flex flex-col w-full h-[calc(100vh-84px)] justify-center items-center bg-labuddy text-white text-center gap-[20px]">
      <BeakerIcon />
      <p className="font-bold text-2xl md:text-3xl lg:text-4xl">추출 중 ...</p>
      <p className="text-sm lg:text-base">
        랩버디가 논문에서 시약/기구 정보를 추출 중입니다!
      </p>
    </div>
  );
};

export default SearchingPage;
