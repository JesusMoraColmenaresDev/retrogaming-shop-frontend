import React from "react";
import Link from "next/link";

interface DynamicLinkProps {
  href: string;
  text: string;
  icon?: React.ReactNode;
  className?: string;
}

export default function DynamicLink({ href, text, icon, className }: DynamicLinkProps) {
  return (
    <Link
      href={href}
      className={`flex items-center gap-2 px-4 py-2 rounded font-semibold hover:text-[#7F13EC] hover:bg-[#7F13EC10] transition ${className || ""}`}
    >
      {icon && <span className="text-gray-500">{icon}</span>}
      <span>{text}</span>
    </Link>
  );
}
