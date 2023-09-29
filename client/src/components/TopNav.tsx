import Image from "next/image";
import Link from "next/link";

export function TopNav() {
  return (
    <header className="sticky top-[40px] z-10  bg-white h-[100px] w-screen pl-10 flex items-center ">
      <Link href={"/"}>
        <div className="flex items-center">
          <Image src={"/logo.png"} width={40} height={40} alt="Logo" />
          <h1 className="pl-5 mb-2 text-2xl font-extrabold pt-2">
            The Milk Runner
          </h1>
        </div>
      </Link>
      <ul className="flex flex-row gap-8 mx-auto mr-10 text-gray-800">
        <li className="font-bold hover:cursor-pointer hover:text-blue-300">
          <Link href="/products">Products</Link>
        </li>
        <li className="font-bold hover:cursor-pointer hover:text-blue-300">
          How it works
        </li>
        <li className="font-bold hover:cursor-pointer hover:text-blue-300">
          Our mission
        </li>
        <li className="font-bold hover:cursor-pointer hover:text-blue-300">
          Contact
        </li>
      </ul>
    </header>
  );
}
