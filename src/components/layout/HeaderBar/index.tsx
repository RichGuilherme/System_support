"use client";

import { usePathname } from "next/navigation";
import { BreadcrumbComponent } from "./Breadcrumb";
import { MenuHeader } from "./MenuHeader";
import WelcomeUser from "./WelcomeUser";

export const HeaderBar = () => {
  const pathname = usePathname();

  const segments = pathname
    .split("/")
    .filter((segment: string) => segment !== "");

  const isPageDefault =
    segments[0] === "dashboard" &&
    (segments.length === 1 || segments[1] === "tickets");

  return (
    <header className="relative z-50 flex h-24 w-full items-center justify-between overflow-hidden px-6">
      {!isPageDefault && <BreadcrumbComponent />}
      {isPageDefault && <WelcomeUser />}
      <MenuHeader />
    </header>
  );
};
