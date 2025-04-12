import Image from "next/image";
import { solveProblemsData } from "./contentData";

const SolveProblem = () => {
  return (
    <div className="flex flex-col w-full h-auto justify-center items-center py-[80px] md:py-[180px] gap-[40px] ">
      <div className="text-2xl md:text-4xl lg:text-5xl font-black text-center px-[32px] lg:px-[120px] xl:px-[320px]">
        {solveProblemsData.title}
      </div>
      <div className="flex w-full h-auto relative">
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 mt-6 z-10 bg-white bg-opacity-90 shadow-md rounded-xl px-6 py-4 max-w-[90%] text-center border border-gray-200">
          <div className="flex text-base sm:text-xl lg:text-2xl font-medium text-center text-gray-800 leading-snug">
            {solveProblemsData.content}
          </div>
        </div>
        {solveProblemsData.image && (
          <Image
            src={solveProblemsData.image}
            alt="img"
            style={{ height: "auto" }}
            className="w-full"
          />
        )}
      </div>
    </div>
  );
};

export default SolveProblem;
