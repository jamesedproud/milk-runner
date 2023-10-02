import Image from "next/image";
import Link from "next/link";
import {
  AiFillTwitterCircle,
  AiFillFacebook,
  AiFillInstagram,
} from "react-icons/ai";

export function Footer() {
  return (
    <footer className="bottom-0 bg-white h-[200px] w-screen lg:px-44 mx-0">
      <div className="flex flex-row sm:pl-12 pl-4 justify-around">
        <div className="flex flex-col mt-7">
          <ul className="space-y-3">
            <li className="font-light hover:cursor-pointer hover:text-blue-300">
              <Link href="/products">Products</Link>
            </li>
            <li className="font-light hover:cursor-pointer hover:text-blue-300">
              Out mission
            </li>
            <li className="font-light hover:cursor-pointer hover:text-blue-300">
              How it works
            </li>
            <li className="font-light hover:cursor-pointer hover:text-blue-300">
              Help
            </li>
          </ul>
        </div>
        <div className="flex flex-col items-center justify-center">
          <p>Follow us!</p>
          <div className="flex flex-row sm:space-x-4 space-x-0">
            <AiFillFacebook
              size={50}
              className="text-black hover:cursor-pointer hover:text-gray-600 sm:pl-0"
            />
            <AiFillInstagram
              size={50}
              className="text-black hover:cursor-pointer hover:text-gray-600"
            />
            <AiFillTwitterCircle
              size={50}
              className="text-black hover:cursor-pointer hover:text-gray-600"
            />
          </div>
        </div>
        <div className="space-y-3 flex flex-col justify-center pt-5">
          <Image src={"/google.svg"} width={150} height={150} alt="Google" />
          <Image src={"/apple.svg"} width={150} height={150} alt="Google" />
        </div>
      </div>
      <p className="text-center font-light">© 2023 The Milk Runner</p>
    </footer>
  );
}
