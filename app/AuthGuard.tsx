"use client";
import "./i18n"
import { useRouter } from "next/navigation";
import { useEffect} from "react";
import { toast, ToastContainer } from "react-toastify";
import { useTranslation } from "next-i18next";



export default function AuthGuard({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const token = localStorage.getItem("token");
  const { t } = useTranslation("common");

  useEffect(() => {
    const path = window.location.pathname;
    if (
      !token &&
      path !== "/login" &&
      path !== "/register"
    ) {
      router.push("/login");
      toast.info(t("AUTH_REQUIRED"));
    } 
  }, [router]);

  return (
    <>
      {children}
      <ToastContainer />
    </>
  );
}