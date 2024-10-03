import React from "react";
import { Outlet } from "react-router-dom/dist";

function AppLayout() {
  return (
    <div>
      AppLayout
      <Outlet />
    </div>
  );
}

export default AppLayout;
