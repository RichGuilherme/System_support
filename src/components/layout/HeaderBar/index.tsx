"use client";

import React from "react";
import { BreadcrumbComponent } from "./Breadcrumb";
import { MenuHeader } from "./MenuHeader";

export const HeaderBar = () => {
  return (
    <header className="relative z-50 flex h-24 w-full items-center justify-between overflow-hidden px-6">
      <BreadcrumbComponent />
      <MenuHeader />
    </header>
  );
};
