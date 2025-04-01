import { ReactNode } from "react";

interface MainContentBoxProps {
  title: ReactNode;
  content: ReactNode;
}

export const MainContentBox = ({ title, content }: MainContentBoxProps) => {
  return (
    <div className="flex flex-col h-auto justify-center items-center gap-[20px] text-center">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={3}
        stroke="currentColor"
        className="size-6 text-blue"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z"
        />
      </svg>
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
