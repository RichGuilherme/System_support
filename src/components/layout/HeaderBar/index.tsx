"use client";

import React from "react";
import { BreadcrumbComponent } from "./Breadcrumb";
import { MenuHeader } from "./MenuHeader";

export const HeaderBar = () => {
  return (
    <header className="flex h-14 w-full justify-between border-b border-gray-200 px-8">
      <BreadcrumbComponent />
      <MenuHeader />
    </header>
  );
};
