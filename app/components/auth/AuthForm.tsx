"use client";
import React from "react";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import DynamicInput from "../dynamic/DynamicInput";
import DynamicButton from "../dynamic/DynamicButton";
import { Lock, Mail, User, UserRound, Phone, Globe, ShieldCheck } from "lucide-react";
import dynamic from "next/dynamic";
const CountrySelect = dynamic(() => import("../CountrySelect"), { ssr: false });


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
  const { register, control, handleSubmit, formState: { errors } } = useForm<FormData>();
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
          <DynamicInput name="firstName" placeholder="Nombre" type="text" register={register} icon={<User />} error={errors.firstName} />
          <DynamicInput name="lastName" placeholder="Apellido" type="text" register={register} icon={<UserRound />} error={errors.lastName} />
          <DynamicInput name="phoneNumber" placeholder="Número de teléfono" type="tel" register={register} icon={<Phone />} error={errors.phoneNumber} />
        </>
      )}
      <DynamicInput name="email" placeholder="Correo electrónico" type="email" register={register} icon={<Mail />} error={errors.email} />
      {isRegister && (
        <Controller
          name="country"
          control={control}
          rules={{ required: true }}
          render={({ field }) => (
            <CountrySelect value={field.value} onChange={field.onChange} error={errors.country} />
          )}
        />)}
      <DynamicInput name="password" placeholder="Contraseña" type="password" register={register} icon={<Lock />} error={errors.password} />
      {isRegister && (
        <DynamicInput name="confirmPassword" placeholder="Confirmar contraseña" type="password" register={register} icon={<ShieldCheck />} error={errors.confirmPassword} />
      )}

      <DynamicButton
        text={view === "login" ? "Iniciar sesión" : "Registrar"}
        type="submit"
      />
    </form>
  );
}