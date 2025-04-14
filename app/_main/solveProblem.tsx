import Image from "next/image";
import { solveProblemsData } from "./contentData";

const SolveProblem = () => {
  return (
    <div className="flex flex-col w-full h-auto justify-center items-center py-[80px] md:py-[180px]">
      <div className="text-xl md:text-4xl lg:text-5xl font-black text-center px-[32px] lg:px-[120px] xl:px-[320px]">
        {solveProblemsData.title}
      </div>
      <div className="flex w-full h-auto relative ">
        <div className="absolute mt-10 sm:mt-0 top-0 sm:top-10 md:top-20 left-1/2 transform -translate-x-1/2 z-10 bg-white bg-opacity-90 shadow-md rounded-xl px-6 py-4 max-w-[calc(100vw-64px)] lg:max-w-[calc(100vw-240px)] xl:max-w-[calc(100vw-640px)] w-full text-center border border-gray-200">
          <div className="text-xs sm:text-base lg:text-2xl font-medium text-gray-800 leading-snug text-center">
            {solveProblemsData.content}
          </div>
        </div>

        {solveProblemsData.image && (
          <Image
            src={solveProblemsData.image}
            alt="img"
            style={{ height: "auto" }}
            className="w-full mt-10 sm:mt-0"
          />
        )}
      </div>
    </div>
  );
};

export default SolveProblem;
