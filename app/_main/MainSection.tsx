"use client";

import { axiosInstance } from "@/api/axios";
import UploadIcon from "@/components/icons/UploadIcon";
import { Label } from "flowbite-react";
import { useState, useRef } from "react";
import { useRouter } from "next/navigation";

const MainSection = () => {
  const [file, setFile] = useState<File | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      setFile(event.target.files[0]);
    }
  };

  const handleDrop = (e: React.DragEvent<HTMLLabelElement>) => {
    e.preventDefault();
    e.stopPropagation();
    const droppedFile = e.dataTransfer.files?.[0];
    if (droppedFile && droppedFile.type === "application/pdf") {
      setFile(droppedFile);
    } else {
      alert("PDF 파일만 업로드할 수 있습니다.");
    }
  };

  const handleDragOver = (e: React.DragEvent<HTMLLabelElement>) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleUpload = async () => {
    if (!file) {
      alert("파일을 선택하세요");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await axiosInstance.post("/analyze/upload", formData);
      if (response.status >= 200 && response.status < 300) {
        router.push("/searching");
        localStorage.setItem(
          "sessionId",
          JSON.stringify(response.data.session_id)
        );
      } else {
        console.error("파일 업로드 실패:", response.statusText);
        alert("파일 업로드에 실패하였습니다.");
      }
    } catch (error) {
      console.error("오류 발생:", error);
      alert("업로드 중 오류가 발생했습니다.");
    }
  };

  return (
    <section className="flex w-full h-auto bg-labuddy px-[32px] lg:px-[120px] xl:px-[320px] py-[120px] xl:py-[240px] text-white flex-col justify-center items-center gap-[80px] sm:gap-[120px] text-center break-keep">
      <div className="flex flex-col justify-center items-center gap-[20px]">
        <div className="flex flex-col justify-center items-center">
          <p className="font-bold text-xl md:text-3xl lg:text-4xl">
            논문에서 사용된 시약/기구 정보 자동 추출 AI 서비스, 랩버디
          </p>
        </div>
        <div className="flex flex-col justify-center items-center text-sm lg:text-base">
          <p>실험할 시간도 부족한데, 논문 읽는데 시간을 낭비하고 계신가요?</p>
          <p>
            PDF만 업로드하고 논문에서 사용된 시약/기구 정보를 3초 만에
            확인해보세요!
          </p>
        </div>
      </div>

      <Label
        className="flex flex-col items-center justify-center w-[760px] max-w-full h-auto sm:h-[120px] border-2 border-white border-dashed rounded-lg cursor-pointer bg-transparent dark:bg-transparent dark:border-white max-sm:py-[28px] max-sm:px-[16px]"
        onClick={() => fileInputRef.current?.click()}
        onDrop={handleDrop}
        onDragOver={handleDragOver}
      >
        {!file && (
          <div className="flex flex-col items-center justify-center">
            <UploadIcon />
            <p className="text-sm text-white dark:text-white font-semibold">
              PDF 업로드 또는 끌어다놓기
            </p>
          </div>
        )}
        {file && (
          <div className="flex flex-col items-center justify-center gap-4">
            <p className="text-sm text-white">{file.name}</p>
            <button
              onClick={handleUpload}
              className="px-6 py-2 bg-yellow/70 hover:bg-yellow/90 text-white text-2xl rounded-lg cursor-pointer"
            >
              시약/기구 정보 추출하기
            </button>
          </div>
        )}
      </Label>
      {!file && (
        <input
          ref={fileInputRef}
          type="file"
          className="hidden"
          accept="application/pdf"
          onChange={handleFileChange}
        />
      )}
    </section>
  );
};

export default MainSection;
