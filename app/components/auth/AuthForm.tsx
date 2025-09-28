"use client";
import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import DynamicInput from "./dynamic/DynamicInput";
import DynamicButton from "./dynamic/DynamicButton";
import { Lock, Mail, User, UserRound, Phone, Globe, ShieldCheck } from "lucide-react";


type ViewType = "login" | "register";

interface AuthFormProps {
  title: string;
  subtitle: string;
  view: ViewType;
}

interface FormData {
  email: string;
  password: string;
  confirmPassword?: string;
  firstName?: string;
  lastName?: string;
  phoneNumber?: string;
  country?: string;
}

export default function AuthForm({ title, subtitle, view }: AuthFormProps) {
  const { register, handleSubmit } = useForm<FormData>();
  const isRegister = view === "register";

  const onSubmit: SubmitHandler<FormData> = (data) => {
    if (view === "login") {
      console.log("Login:", data);
    } else {
      console.log("Register:", data);
    }
  };

  return (
    <form
      className="w-[500px] border p-8 flex flex-col justify-center rounded-lg"
      style={{ borderColor: "rgba(127, 19, 236, 0.5)" }}
      onSubmit={handleSubmit(onSubmit)}
    >
      <h1 className="text-center text-2xl font-semibold text-white mb-3">{title}</h1>
      <p className="text-center text-gray-500 mb-8">{subtitle}</p>

      {isRegister && (
        <>
          <DynamicInput name="firstName" placeholder="Nombre" type="text" register={register} icon={<User />} />
          <DynamicInput name="lastName" placeholder="Apellido" type="text" register={register} icon={<UserRound />} />
          <DynamicInput name="phoneNumber" placeholder="Número de teléfono" type="tel" register={register} icon={<Phone />} />
        </>
      )}
      <DynamicInput name="email" placeholder="Correo electrónico" type="email" register={register} icon={<Mail />} />
      {isRegister && (
        <DynamicInput name="country" placeholder="País" type="text" register={register} icon={<Globe />} />
      )}
      <DynamicInput name="password" placeholder="Contraseña" type="password" register={register} icon={<Lock />} />
      {isRegister && (
        <DynamicInput name="confirmPassword" placeholder="Confirmar contraseña" type="password" register={register} icon={<ShieldCheck />} />
      )}

      <DynamicButton
        text={view === "login" ? "Iniciar sesión" : "Registrar"}
        type="submit"
      />
    </form>
  );
}