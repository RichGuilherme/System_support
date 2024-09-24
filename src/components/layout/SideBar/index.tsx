"use client";

import { Button } from "@/components/ui/button";
import { Routers } from "@/constant";
import { HeadsetIcon, LogOutIcon, Plus } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import React from "react";
import { cn } from "@/lib/utils";

export const SideBar = () => {
  const router = useRouter();
  const pathname = usePathname();
  const firstSegment = pathname.split("/")[1];

  const handleButtonNav = (url: string) => {
    router.push(url);
  };

  const userOn = { user: "Richard Guilherme" };

  return (
    <aside className="flex h-screen w-64 flex-col items-center space-y-4 border-r border-border bg-sidebar py-5 text-sidebar-foreground">
      <p className="mb-2 flex items-center gap-2">
        <HeadsetIcon size={30} className="text-highlight-verdinho" />
        <b>{userOn.user}</b>
      </p>

      <Button
        variant="outline"
        className="border-highlight-verdinho flex w-10/12 gap-1 rounded-2xl px-1 py-2 text-sm text-sidebar-foreground"
      >
        <Plus className="icon-sm text-sidebar-foreground" />
        Abrir novo ticket
      </Button>

      <nav className="mt-2 flex h-full w-full flex-col justify-between">
        <li className="flex flex-col space-y-1 py-4">
          {Routers.map((router) => {
            const IconComponent = router.icon;

            return (
              <Button
                key={router.name}
                className={cn(
                  "text-textSimples-200 w-full justify-start gap-3 rounded-none px-5 py-3 text-sm font-light hover:font-normal hover:text-sidebar-foreground",
                  firstSegment === `${router.name}` &&
                    "bg-gradient-to-r from-[var(--verdinho-350)] from-5% font-medium text-sidebar-foreground",
                )}
                onClick={() => handleButtonNav(router.url)}
              >
                <IconComponent
                  size={20}
                  className={cn(
                    firstSegment === `${router.name}` &&
                      "text-highlight-verdinho",
                  )}
                />
                {router.title}
              </Button>
            );
          })}
        </li>

        <Button
          variant="ghost"
          className="ml-3 flex w-16 gap-2 border-none py-1"
          onClick={() => router.push("/cadastra")}
        >
          <LogOutIcon size={20} />
          Sair
        </Button>
      </nav>
    </aside>
  );
};
