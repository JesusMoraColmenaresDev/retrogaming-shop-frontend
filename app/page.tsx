"use client";
import "./i18n"
export default function Home() {

  if (localStorage.getItem("token")) {
    return (
      <div className="flex items-center justify-center min-h-screen w-full">
        <h1 className="text-4xl font-bold">Welcome to the Home Page!</h1>
      </div>
    );
  } 

  return null;
}
