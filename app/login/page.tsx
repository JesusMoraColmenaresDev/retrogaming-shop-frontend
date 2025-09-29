"use client";
import React, { use } from "react";
import AuthForm from "../components/auth/AuthForm";
import { useTranslation } from "next-i18next";

export default function LoginPage() {
  const { t } = useTranslation("common");

  return (
    <div className="flex items-center justify-center min-h-screen w-full">
      <AuthForm
        title={t("login")}
        subtitle={t("loginSubtitle")}
        view="login"
      />
    </div>
  );
}