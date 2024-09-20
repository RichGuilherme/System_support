import { BreadcrumbItem, BreadcrumbLink, BreadcrumbList, Breadcrumb, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { usePathname } from "next/navigation";
import React from "react";

export const BreadcrumbComponent = () => {
  const pathname = usePathname();
  const pathSegments = pathname.split("/").filter((segment: string) => segment !== "");

  return (
    <Breadcrumb className="relative top-[27px] left-0 w-[50%]">
      <BreadcrumbList>
        {pathSegments.map((segment, index) => {
          const href = `/${pathSegments.slice(0, index + 1).join("/")}`;

          const isLast = index === pathSegments.length - 1;

          return (
            <React.Fragment key={`href-${href}`}>
              {
                isLast ? (
                  <BreadcrumbItem >
                    <BreadcrumbLink >{segment}</BreadcrumbLink>
                  </BreadcrumbItem>
                ) :
                  (
                    <>
                      <BreadcrumbItem >
                        <BreadcrumbLink
                          href={href}>
                          {segment}
                        </BreadcrumbLink>
                      </BreadcrumbItem>
                      <BreadcrumbSeparator />
                    </>
                  )
              }
            </React.Fragment>
          );
        }
        )}
      </BreadcrumbList>
    </Breadcrumb>
  );
};
