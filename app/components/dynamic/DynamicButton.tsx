import React from "react";

interface DynamicButtonProps {
  text: string;
  type?: "button" | "submit";
  onClick?: () => void;
  className?: string;
}

export default function DynamicButton({
  text,
  type = "submit",
  onClick,
  className,
}: DynamicButtonProps) {
  return (
    <button
      type={type}
      className={`w-full py-2 bg-[#7f13ec] text-white rounded font-semibold hover:bg-[#7f13ec90] transition ${className || ""}`}
      onClick={onClick}
    >
      {text}
    </button>
  );
}