
import React from "react";
import { HeaderBar } from "../HeaderBar";
import { SideBar } from "../SideBar";

export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-screen w-full flex flex-row">
      <SideBar />

      <div className="w-full h-full">
        <HeaderBar />
        <main className="">
          {children}
        </main>
      </div>
    </div>
  );
};
