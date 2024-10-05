import Header from "@/components/ui/header";
import React from "react";
import { Outlet } from "react-router-dom/dist";

function AppLayout() {
  return (
    <div>
      <div className="grid-background"></div>
      <main className="min-h-screen container">
        <Header></Header>
        <Outlet />
      </main>
      <div className="p-5 text-center bg-gray-800 mt-10">
        Made with love by only_pramod
      </div>
    </div>
  );
}

export default AppLayout;
