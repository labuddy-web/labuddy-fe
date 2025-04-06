"use client";

import { axiosInstance } from "@/api/axios";
import UploadIcon from "@/components/icons/UploadIcon";
import { Label } from "flowbite-react";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

const MainSection = () => {
  const [file, setFile] = useState<File | null>(null);
  const router = useRouter();

  useEffect(() => {
    if (file) {
      setFile(file);
    }
  }, [file]);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      setFile(event.target.files[0]);
    }
  };

  const handleUpload = async () => {
    console.log("업로드할 파일:", file);
    if (!file) {
      alert("파일을 선택하세요");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await axiosInstance.post("/analyze/upload", formData, {
        headers: {},
      });

      if (response.status >= 200 && response.status < 300) {
        console.log("파일 업로드 성공", response.data);
        alert("파일 업로드 성공에 성공하였습니다.");

        // sessionId를 localStorage에 저장
        localStorage.setItem(
          "sessionId",
          JSON.stringify(response.data.session_id)
        );

        router.push("/searching");

        // 3초 후 `/result` 페이지로 이동
        setTimeout(() => {
          router.push("/result");
        }, 3000);
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
    <section className="flex w-full bg-labuddy px-[32px] lg:px-[120px] xl:px-[320px] py-[120px] xl:py-[240px] text-white flex-col justify-center items-center gap-[120px] text-center">
      <div className="flex flex-col justify-center items-center gap-[20px]">
        <div className="flex flex-col justify-center items-center">
          <p className="font-bold text-2xl md:text-3xl lg:text-4xl">LabBuddy</p>
          <p className="font-bold text-xl md:text-3xl lg:text-4xl">
            : Extract <span className="font-black">Reagent & Equipment</span>{" "}
            Info from Research Papers
          </p>
        </div>
        <div className="flex flex-col justify-center items-center text-sm lg:text-base">
          <p>
            Short on time for experiments and spending too much of it reading
            papers?
          </p>
          <p>
            Just upload a PDF and get reagent and equipment information from the
            paper in just 3 seconds!
          </p>
        </div>
      </div>

      <Label className="flex flex-col items-center justify-center w-[760px] max-w-full h-[120px] border-2 border-white border-dashed rounded-lg cursor-pointer bg-transparent dark:bg-transparent dark:border-white">
        {!file && (
          <div className="flex flex-col items-center justify-center">
            <UploadIcon />
            <p className="text-sm text-white dark:text-white font-semibold">
              Click to upload
            </p>
          </div>
        )}
        {file && (
          <button
            onClick={handleUpload}
            className="mt-4 px-6 py-2 bg-gray-200/20 text-white rounded-lg cursor-pointer"
          >
            start search
          </button>
        )}
        <input
          type="file"
          className="hidden"
          accept="application/pdf"
          onChange={(e) => handleFileChange(e)}
        />
      </Label>
    </section>
  );
};

export default MainSection;
