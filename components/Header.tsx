import Image from "next/image";
import labuddy_logo from "@/public/logo.svg";

const Header = () => {
  return (
    <div className="w-full h-[84px] bg-white flex items-center justify-between px-[32px] lg:px-[120px] xl:px-[320px]">
      <a href={"/"}>
        <Image src={labuddy_logo} alt="logo" width={172} height={40} />
      </a>
      <button className="w-auto h-[40px] flex flex-row items-center gap-[24px] text-black">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
          />
        </svg>
        <p>log in</p>
      </button>
    </div>
  );
};

export default Header;
