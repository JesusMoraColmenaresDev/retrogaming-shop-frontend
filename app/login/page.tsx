"use client";
import React, { use } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import AuthForm from "../components/auth/AuthForm";

interface LoginFormData {
  username: string;
  password: string;
}

export default function LoginPage() {
  const { register, handleSubmit } = useForm<LoginFormData>();
  
  return (
    <div className="flex items-center justify-center min-h-screen w-full">
      <AuthForm
        title="Iniciar sesión"
        subtitle="Introduce tus credenciales"
        view="login"
      />
    </div>
  );
}