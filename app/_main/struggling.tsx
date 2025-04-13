import { strugglingData } from "./contentData";

const Struggling = () => {
  return (
    <div className="flex flex-col w-full h-auto justify-center items-center px-[32px] lg:px-[120px] xl:px-[320px] py-[80px] md:py-[180px] gap-[32px] md:gap-[80px]">
      <div className="text-xl md:text-4xl lg:text-5xl font-black text-center">
        {strugglingData.title}
      </div>
      <div className="flex flex-col md:flex-row w-full h-auto gap-[40px] md:gap-[20px] lg:gap-[80px] justify-center items-center">
        <div className="flex w-full text-base sm:text-xl lg:text-2xl font-medium text-center md:text-start">
          {strugglingData.content}
        </div>
      </div>
    </div>
  );
};

export default Struggling;
