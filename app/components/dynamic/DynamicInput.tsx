import React from "react";
import { UseFormRegister } from "react-hook-form";

interface DynamicInputProps {
  name: string;
  placeholder: string;
  type?: string;
  register: UseFormRegister<any>;
  icon?: React.ReactNode;
  error?: any;
}

export default function DynamicInput({
  name,
  placeholder,
  type = "text",
  register,
  error,
  icon,
}: DynamicInputProps) {
  return (
    <div className="flex flex-col gap-1 mb-4 w-full">
      <div className="flex items-center gap-2">
        {icon && <span className="text-gray-500">{icon}</span>}
        <div className="flex flex-col">
          <input
            className="w-full p-2 rounded font-bold text-gray-500"
            placeholder={placeholder}
            type={type}
            {...register(name, { required: true })}
          />
          {error && (
            <span className="text-red-500 text-xs p-2">
              El campo {placeholder} no puede ir vacío
            </span>
          )}
        </div>

      </div>

    </div>

  );
}