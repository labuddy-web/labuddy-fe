import Image from "next/image";
import { doYouKnowData } from "./contentData";

const DoYouKnow = () => {
  return (
    <div className="flex flex-col w-full bg-gray-200 h-auto justify-center items-center px-[32px] lg:px-[120px] xl:px-[320px] py-[80px] md:py-[180px] gap-[32px] md:gap-[80px]">
      <div className="text-2xl md:text-4xl lg:text-5xl font-black text-center">
        {doYouKnowData.title}
      </div>
      <div className="flex flex-col md:flex-row w-full h-auto gap-[40px] md:gap-[20px] lg:gap-[80px] justify-center items-center">
        <div className="flex text-base sm:text-xl lg:text-2xl font-medium text-center md:text-start">
          {doYouKnowData.content}
        </div>
        {doYouKnowData.image && (
          <Image
            src={doYouKnowData.image}
            alt="img"
            style={{ height: "auto" }}
            className="w-[320px] md:w-[280px] lg:w-[320px] 2xl:w-[480px] rounded-2xl md:rounded-4xl"
          />
        )}
      </div>
    </div>
  );
};

export default DoYouKnow;
