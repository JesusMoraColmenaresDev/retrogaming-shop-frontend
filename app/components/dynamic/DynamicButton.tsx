import React from "react";

interface DynamicButtonProps {
  text: string;
  type?: "button" | "submit";
  onClick?: () => void;
}

export default function DynamicButton({
  text,
  type = "submit",
  onClick,
}: DynamicButtonProps) {
  return (
    <button
      type={type}
      className="w-full py-2 mt-4 bg-[#7f13ec] text-white rounded font-semibold hover:bg-opacity-80 transition"
      onClick={onClick}
    >
      {text}
    </button>
  );
}