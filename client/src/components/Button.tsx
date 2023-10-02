import type { DetailedHTMLProps, ButtonHTMLAttributes } from "react";

type ButtonProps = {
  small?: boolean;
  gray?: boolean;
  className?: string;
} & DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

export function Button({ small, gray, className = "", ...props }: ButtonProps) {
  const sizeClasses = small ? "px-2 py-1" : "px-4 py-2 font-bold";
  const colorClasses = gray
    ? "bg-gray-400 hover:bg-gray-300 focux-visible:bg-gray-300"
    : "bg-[#73ebd1] text-gray-700 hover:bg-gray-700 hover:text-[#73ebd1] focu-visible:bg-gray-700";
  return (
    <button
      className={`disabled:opacity-50 w-40 h-10 pb-9 text-lg rounded-xl transition-colors duration-200 disabled:cursor-not-allowed ${sizeClasses} ${colorClasses} ${className}`}
      {...props}
    ></button>
  );
}
