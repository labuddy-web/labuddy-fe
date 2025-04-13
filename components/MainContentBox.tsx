import { ReactNode } from "react";
import Image, { StaticImageData } from "next/image";

interface DetailContentBoxProps {
  className: string;
  content: ReactNode;
  img: StaticImageData;
}

export const DetailContentBox = ({
  className,
  content,
  img,
}: DetailContentBoxProps) => {
  return (
    <div
      className={`flex h-auto w-full justify-start items-center gap-[12px] sm:gap-[20px] text-center ${className}`}
    >
      <Image
        alt="img"
        src={img}
        style={{ height: "auto" }}
        className="w-[140px] md:w-[200px] lg:w-[320px]"
      />
      <div>
        <div className="flex text-base sm:text-xl lg:text-2xl font-medium">
          {content}
        </div>
      </div>
    </div>
  );
};
