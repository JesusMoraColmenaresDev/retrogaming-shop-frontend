"use client";
import React from "react";
import AuthForm from "../components/auth/AuthForm";
import { useTranslation } from "next-i18next";

export default function RegisterPage() {
  const { t } = useTranslation("common");
  return (
    <div className="flex items-center justify-center min-h-screen w-full">
      <AuthForm
        title={t("register")}
        subtitle={t("registerSubtitle")}
        view="register"
      />
    </div>
  );
}
