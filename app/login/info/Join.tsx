"use client";

import { useState } from "react";
import TextInput from "@/components/Input";

const Join = () => {
  const [phoneNum, setPhoneNum] = useState<string>("");
  return (
    <div className="flex flex-col justify-center items-center w-full max-w-[700px] h-[calc(100vh-84px)] sm:h-auto sm:max-h-[360px] px-[32px] sm:px-[118px] py-[58px] gap-[24px] sm:gap-[48px] sm:rounded-3xl text-center text-white bg-gray-800">
      <p className="font-semibold text-3xl sm:text-5xl">JOIN</p>
      <div className="flex flex-row w-full h-[78px] px-[20px] py-[10px] justify-center items-center gap-[42px] rounded-[20px] bg-black cursor-pointer">
        <TextInput data={phoneNum} setData={setPhoneNum} />
      </div>
    </div>
  );
};

export default Join;
