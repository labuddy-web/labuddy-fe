import Image from "next/image";
import { ourMission } from "./contentData";

const Mission = () => {
  return (
    <div className="relative w-full h-auto flex justify-center items-center py-[80px] md:py-[180px] overflow-hidden">
      {ourMission.image && (
        <Image
          src={ourMission.image}
          alt="Mission Background"
          fill
          style={{ objectFit: "cover" }}
          className="z-0"
        />
      )}

      <div className="relative flex flex-col z-10 bg-white/80 rounded-xl shadow-md px-[40px] sm:px-[64px] py-[40px] text-center h-auto w-auto max-w-[calc(100vw-64px)] lg:max-w-[calc(100vw-240px)] xl:max-w-[calc(100vw-640px)] gap-[32px]">
        <div className="text-xl md:text-4xl lg:text-5xl font-black text-center">
          {ourMission.title}
        </div>

        <div className="text-base sm:text-xl lg:text-2xl font-medium text-center text-black">
          {ourMission.content}
        </div>
      </div>
    </div>
  );
};

export default Mission;
