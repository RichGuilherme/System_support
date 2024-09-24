"use client";

import React from "react";
import { BreadcrumbComponent } from "./Breadcrumb";
import { MenuHeader } from "./MenuHeader";

export const HeaderBar = () => {
  return (
    <header className="bg-backgroundSecondary relative z-50 flex h-14 w-full justify-between overflow-hidden border-b border-border px-8">
      <BreadcrumbComponent />
      <MenuHeader />
    </header>
  );
};
