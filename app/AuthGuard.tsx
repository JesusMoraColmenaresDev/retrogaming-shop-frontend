"use client";
import "./i18n"
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { toast, ToastContainer } from "react-toastify";
import { useTranslation } from "next-i18next";
import api from "./lib/api";
import { useCurrentUserStore } from "./store/currentUserStore";



export default function AuthGuard({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const token = localStorage.getItem("token");
  const { t } = useTranslation("common");

  const setUser = useCurrentUserStore((state) => state.setUser);

  useEffect(() => {
    const checkAuth = async () => {
      const path = window.location.pathname;
      if (!token && path !== "/login" && path !== "/register") {
        router.push("/login");
        toast.info(t("AUTH_REQUIRED"));
      }

      //esto es para traerme la informacion del usuario cada que recargue la pagina
      if (token) {
        try {
          const response = await api.get("me");
          if (response.data && response.data.user) {
            setUser(response.data.user);
          }
        } catch (error) {
          console.error(error);
        }
      }
    };
    
    checkAuth();
  }, [router, token, t, setUser]);

  return (
    <>
      {children}
      <ToastContainer />
    </>
  );
}