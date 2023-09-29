import Image from "next/image";
import Link from "next/link";

export function TopBar() {
  return (
    <header className="sticky top-0 z-20 bg-[#3d5367] h-[40px] w-screen pl-10 flex justify-center items-center ">
      <div className="flex items-center">
        <p className="text-white">
          Refer friends, get ¥1000 off a one-time order!
        </p>
      </div>
    </header>
  );
}
