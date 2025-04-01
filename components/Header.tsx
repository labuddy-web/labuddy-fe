import Image from "next/image";
import labuddy_logo from "@/public/logo.svg";
import UserIcon from "./icons/UserIcon";
import Link from "next/link";

const Header = () => {
  return (
    <div className="w-full h-[84px] bg-white flex items-center justify-between px-[32px] lg:px-[120px] xl:px-[320px]">
      <Link href={"/"}>
        <Image src={labuddy_logo} alt="logo" width={172} height={40} />
      </Link>
      <Link href={"/login"}>
        <div className="w-auto h-[40px] flex flex-row items-center gap-[24px] text-black">
          <UserIcon />
          <p className="hidden sm:block">log in</p>
        </div>
      </Link>
    </div>
  );
};

export default Header;
