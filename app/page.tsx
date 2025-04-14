"use client";

import { useRef } from "react";
import ContentSection from "./_main/ContentSection";
import MainSection from "./_main/MainSection";

export default function Home() {
  const mainSectionRef = useRef<HTMLDivElement>(null);

  const scrollToMainSection = () => {
    if (mainSectionRef.current) {
      mainSectionRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="flex flex-col w-full items-center">
      <div ref={mainSectionRef} className="flex w-full">
        <MainSection />
      </div>
      <ContentSection />
      <button
        onClick={scrollToMainSection}
        className="flex bg-orange-400 rounded-xl sm:rounded-2xl shadow-2xl py-[16px] sm:py-[24px] px-[64px] mb-[120px] xl:mb-[240px]"
      >
        <p className="text-xl md:text-2xl lg:text-4xl font-extrabold text-center text-white">
          논문 검색하기
        </p>
      </button>
    </div>
  );
}
