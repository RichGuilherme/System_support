"use client";

import {
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  Breadcrumb,
} from "@/components/ui/atoms/breadcrumb";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export const BreadcrumbComponent = () => {
  const pathname = usePathname();
  const pathSegments = pathname
    .split("/")
    .filter((segment: string) => segment !== "");

  return (
    <Breadcrumb className="z-10 flex w-[50%] items-center">
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

          const decodedSegment = decodeURIComponent(segment);

          const isLast = index === pathSegments.length - 1;
          console.log(decodedSegment);
          return (
            <React.Fragment key={`href-${href}`}>
              {isLast ? (
                <BreadcrumbItem
                  className="gradient_azul"
                  style={{
                    right: `${(index + 1) * 28}px`,
                    zIndex: -100,
                    color: "#fff",
                  }}
                >
                  <BreadcrumbLink>{decodedSegment}</BreadcrumbLink>
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
                    <BreadcrumbLink href={href}>
                      {decodedSegment}
                    </BreadcrumbLink>
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
