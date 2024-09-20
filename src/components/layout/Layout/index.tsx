import { SiderBar } from "@/components/root/SiderBar";
import React from "react";
import { HeaderBar } from "../HeaderBar";

export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-screen w-full flex flex-row">
      <SiderBar />

      <div className="w-full h-full">
        <HeaderBar />
        <main className="">
          {children}
        </main>
      </div>
    </div>
  );
};
