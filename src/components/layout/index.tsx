import React from "react";
import { HeaderBar } from "./HeaderBar";
import { SideBar } from "./SideBar";

export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex h-screen max-w-full flex-row">
      <SideBar />

      <div className="h-full w-full">
        <HeaderBar />
        <main className="h-auto w-full p-6 pb-24">{children}</main>
      </div>
    </div>
  );
};
