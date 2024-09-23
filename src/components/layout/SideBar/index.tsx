"use client";

import { Button } from "@/components/ui/button";
import { Routers } from "@/constant";
import { Plus } from "lucide-react";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import React from "react";
import logoImg from "@/app/assets/logo-branca-pequena.png";
import { cn } from "@/lib/utils";

export const SideBar = () => {
  const router = useRouter();
  const pathname = usePathname();
  const firstSegment = pathname.split("/")[1];

  const handleButtonNav = (url: string) => {
    router.push(url);
  };

  return (
    <aside className="flex flex-col items-center bg-sidebar h-full w-64 px-1 py-4 space-y-4 text-sidebar-foreground">
      <Image
        alt="Logo Info"
        src={logoImg}
        width={60}
        height={58}
      />

      <Button
        variant="outline"
        className="flex gap-1 py-2 px-1 w-10/12 text-sm border-[#b5d333] rounded-2xl text-sidebar-foreground">
        <Plus className="icon-sm text-sidebar-foreground" />
        Abrir novo ticket
      </Button>

      <nav className="mt-4 py-4 flex flex-col space-y-2  border-b border-zinc-500 ">
        {Routers.map((router) => {
          const IconComponent = router.icon;

          return (
            <Button key={router.name}

              className={cn(
                "text-base gap-3 justify-start px-3 w-48 py-3 text-sidebar-foreground font-extralight hover:bg-custom-gray hover:font-normal",
                firstSegment === `${router.name}` && "bg-custom-gray"
              )}
              onClick={() => handleButtonNav(router.url)}
            >
              <IconComponent className="icon-md" />
              {router.title}
            </Button>
          );
        })}
      </nav>
    </aside>
  );
};
