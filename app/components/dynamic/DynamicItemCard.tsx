import Image from "next/image";
import React from "react";

interface DynamicItemCardProps {
    imageUrl: string;
    title: string;
    subtitle?: string;
    subtitle2?: string;
    button?: React.ReactNode;
    className?: string;
}

export default function DynamicItemCard({
    imageUrl,
    title,
    subtitle,
    subtitle2,
    button,
    className,
}: DynamicItemCardProps) {
    return (
        <div className={`w-[400px] h-[400px] bg-[#1A1A1A] rounded-2xl flex flex-col gap-4  ${className || ""}`}>
            <div className="relative w-full h-[200px]">
                <Image src={imageUrl} fill alt={title} className="object-cover rounded-t-2xl" sizes="400px" />
            </div>
            <div className=" px-4 flex flex-col gap-2">
                <p className="text-white text-xl font-semibold">{title}</p>
                {subtitle && <p className="text-gray-400 text-lg">{subtitle}</p>}
                {subtitle2 && <p className="text-gray-400 text-base">{subtitle2}</p>}
                {button && <div className="mt-2">{button}</div>}
            </div>
        </div>
    );
}