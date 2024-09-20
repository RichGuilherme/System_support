"use client";

import React from "react";
import { BreadcrumbComponent } from "./Breadcrumb";
import { MenuHeader } from "./MenuHeader";


export const HeaderBar = () => {

  return (
    <header className="w-full h-14 flex justify-between px-8 border-b border-gray-200">
      <BreadcrumbComponent />
      <MenuHeader />
    </header >
  );
};
