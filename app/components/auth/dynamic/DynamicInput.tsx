import React from "react";
import { UseFormRegister } from "react-hook-form";

interface DynamicInputProps {
  name: string;
  placeholder: string;
  type?: string;
  register: UseFormRegister<any>;
  icon?: React.ReactNode;
}

export default function DynamicInput({
  name,
  placeholder,
  type = "text",
  register,
  icon,
}: DynamicInputProps) {
  return (
    <div className="flex items-center gap-2 mb-4">
      {icon && <span className="text-gray-500">{icon}</span>}
      <input
        className="w-full p-2 rounded font-bold text-gray-500"
        placeholder={placeholder}
        type={type}
        {...register(name)}
      />
    </div>
  );
}