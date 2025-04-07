import { ReactNode } from "react";
import CheckBadgeIcon from "./icons/CheckBadgeIcon";
import Image, { StaticImageData } from "next/image";

interface MainContentBoxProps {
  title: ReactNode;
  content: ReactNode;
}

interface DetailContentBoxProps {
  title: ReactNode | null;
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
  title,
  content,
  img,
}: DetailContentBoxProps) => {
  return (
    <div className="flex flex-col h-auto w-auto sm:w-[calc((100%-48px)/3)] justify-center items-center gap-[12px] sm:gap-[20px] text-center">
      <Image
        alt="img"
        src={img}
        style={{ width: "auto" }}
        className="h-[84px] sm:h-[140px]"
      />
      <div>
        {title && <div className="text-xs lg:text-sm font-bold">{title}</div>}
        <div className="text-xs lg:text-sm font-light">{content}</div>
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
