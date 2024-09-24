"use client";

import {
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  Breadcrumb,
} from "@/components/ui/breadcrumb";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export const BreadcrumbComponent = () => {
  const pathname = usePathname();
  const pathSegments = pathname
    .split("/")
    .filter((segment: string) => segment !== "");

  return (
    <Breadcrumb className="relative left-0 top-[20px] z-10 w-[50%]">
      <BreadcrumbList>
        <BreadcrumbItem
          className="px-6"
          style={{
            zIndex: 20,
            boxShadow: "8px 0px 17px -6px rgba(0, 0, 0, .4)",
          }}
        >
          <BreadcrumbLink asChild>
            <Link href="/">Home</Link>
          </BreadcrumbLink>
        </BreadcrumbItem>

        {pathSegments.map((segment, index) => {
          const href = `/${pathSegments.slice(0, index + 1).join("/")}`;

          const isLast = index === pathSegments.length - 1;

          return (
            <React.Fragment key={`href-${href}`}>
              {isLast ? (
                <BreadcrumbItem
                  style={{
                    right: `${(index + 1) * 28}px`,
                    zIndex: -100,
                    backgroundColor: "var(--azul-800)",
                    color: "#fff",
                  }}
                >
                  <BreadcrumbLink>{segment}</BreadcrumbLink>
                </BreadcrumbItem>
              ) : (
                <>
                  <BreadcrumbItem
                    style={{
                      right: `${(index + 1) * 28}px`,
                      zIndex: `${-index + 1}`,
                      boxShadow: "8px 0px 17px -6px rgba(0, 0, 0, .4)",
                    }}
                  >
                    <BreadcrumbLink href={href}>{segment}</BreadcrumbLink>
                  </BreadcrumbItem>
                </>
              )}
            </React.Fragment>
          );
        })}
      </BreadcrumbList>
    </Breadcrumb>
  );
};
