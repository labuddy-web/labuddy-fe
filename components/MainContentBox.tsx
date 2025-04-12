import { ReactNode } from "react";
import CheckBadgeIcon from "./icons/CheckBadgeIcon";
import Image, { StaticImageData } from "next/image";

interface MainContentBoxProps {
  title: ReactNode;
  content: ReactNode;
}

interface DetailContentBoxProps {
  className: string;
  content: ReactNode;
  img: StaticImageData;
}

export const MainContentBox = ({ title, content }: MainContentBoxProps) => {
  return (
    <div className="flex flex-col h-auto justify-center items-center gap-[20px] text-center">
      <CheckBadgeIcon />
      <div className="text-lg lg:text-xl font-black">{title}</div>
      <div className="text-xs lg:text-sm font-light">{content}</div>
    </div>
  );
};

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

export const MissionContentBox = ({ title, content }: MainContentBoxProps) => {
  return (
    <div className="flex flex-col h-auto justify-center items-center gap-[20px] text-center">
      <div className="text-base lg:text-xl font-medium">{title}</div>
      <div className="text-xs lg:text-lg font-light">{content}</div>
    </div>
  );
};
