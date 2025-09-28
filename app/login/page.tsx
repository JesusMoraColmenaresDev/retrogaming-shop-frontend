"use client";
import React, { use } from "react";
import AuthForm from "../components/auth/AuthForm";

export default function LoginPage() {
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