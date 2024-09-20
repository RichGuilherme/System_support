"use client";

import { Button } from "@/components/ui/button";
import { Routers } from "@/constant";
import { Plus } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import React from "react";

export const SideBar = () => {
  const router = useRouter();
  const pathName = usePathname();

  return (
    <aside className="flex flex-col items-center bg-sidebar-bgSidebar h-full w-52 px-1 py-4">
      <Button
        className="flex gap-1 py-2 px-1 w-10/12 bg-[#0CC4B6] text-sm text-white">
        <Plus className="icon-sm text-white" />
        Abrir novo ticket
      </Button>

      <nav className="mt-2">
        {Routers.map((router) => {
          const IconComponent = router.icon;

          return (
            <Button key={router.name}>
              <IconComponent className="icon-sm text-white" />
              {router.title}
            </Button>
          );
        })}
      </nav>
    </aside>
  );
};
