import { ReactNode } from "react";
import CheckBadgeIcon from "./icons/CheckBadgeIcon";

interface MainContentBoxProps {
  title: ReactNode;
  content: ReactNode;
}

export const MainContentBox = ({ title, content }: MainContentBoxProps) => {
  return (
    <div className="flex flex-col h-auto justify-center items-center gap-[20px] text-center">
      <CheckBadgeIcon />
      <div className="text-base lg:text-lg font-medium">{title}</div>
      <div className="text-xs lg:text-sm font-light">{content}</div>
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
