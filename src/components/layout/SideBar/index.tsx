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
    <aside className="flex h-full w-64 flex-col items-center space-y-4 bg-sidebar px-1 py-4 text-sidebar-foreground">
      <Image alt="Logo Info" src={logoImg} width={60} height={58} />

      <Button
        variant="outline"
        className="flex w-10/12 gap-1 rounded-2xl border-[#b5d333] px-1 py-2 text-sm text-sidebar-foreground"
      >
        <Plus className="icon-sm text-sidebar-foreground" />
        Abrir novo ticket
      </Button>

      <nav className="mt-4 flex flex-col space-y-2 border-b border-zinc-500 py-4">
        {Routers.map((router) => {
          const IconComponent = router.icon;

          return (
            <Button
              key={router.name}
              className={cn(
                "w-48 justify-start gap-3 px-3 py-3 text-base font-extralight text-sidebar-foreground hover:bg-custom-gray hover:font-normal",
                firstSegment === `${router.name}` && "bg-custom-gray",
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
