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
    <Breadcrumb className="relative left-0 top-[20px] w-[50%]">
      <BreadcrumbList>
        <BreadcrumbItem
          className="px-6"
          style={{
            zIndex: 100,
            boxShadow: "10px 0px 14px -8px rgba(0,0,0,.4)",
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
                    right: `${(index + 1) * 27}px`,
                    zIndex: -100,
                    backgroundColor: "var(--azul-400)",
                    color: "#fff",
                  }}
                >
                  <BreadcrumbLink>{segment}</BreadcrumbLink>
                </BreadcrumbItem>
              ) : (
                <>
                  <BreadcrumbItem
                    style={{
                      right: `${(index + 1) * 27}px`,
                      zIndex: `${-index + 1}`,
                      boxShadow: "10px 0px 14px -8px rgba(0,0,0,.4)",
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
