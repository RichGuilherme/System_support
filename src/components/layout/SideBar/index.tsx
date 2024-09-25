"use client";

import { Button } from "@/components/ui/atoms/button";
import { Routers } from "@/constant";
import {
  ChevronDownIcon,
  HeadsetIcon,
  icons,
  LogOutIcon,
  Plus,
} from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { Collapsible } from "@/components/ui/atoms/collapsible";

export const SideBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const router = useRouter();
  const pathname = usePathname();
  const firstSegment = pathname.split("/")[1];

  const handleButtonNav = (url: string) => {
    router.push(url);
  };

  const userOn = { user: "Richard Guilherme" };

  return (
    <aside className="gradient_azul flex h-screen w-64 flex-col items-center space-y-4 py-5 text-sidebar-foreground">
      <div className="my-2 space-y-4">
        <p className="flex flex-row items-center gap-2">
          <HeadsetIcon size={30} className="text-highlight-verdinho" />
          <b>{userOn.user}</b>
        </p>

        <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-[#D9D9D9] to-transparent" />
      </div>

      <Button
        variant="outline"
        className="flex w-10/12 gap-1 rounded-2xl border-highlight-verdinho px-1 py-2 text-sm text-sidebar-foreground"
      >
        <Plus className="icon-sm text-sidebar-foreground" />
        Abrir novo ticket
      </Button>

      <nav className="mt-2 flex h-full w-full flex-col justify-between">
        <Collapsible className="flex flex-col space-y-1 py-4">
          {Routers.map((router) => {
            const IconComponent = router.icon;

            return (
              <Button
                key={`name-${router.name}`}
                className={cn(
                  "w-full justify-between rounded-none px-5 py-3 text-sm font-light text-textSimples-200 hover:text-sidebar-foreground",
                  firstSegment === `${router.name}` &&
                    "bg-gradient-to-r from-[var(--verdinho-350)] from-10% font-medium text-sidebar-foreground",
                )}
              >
                <div className="flex flex-row gap-3">
                  <IconComponent
                    size={20}
                    className={cn(
                      firstSegment === `${router.name}` &&
                        "text-highlight-verdinho",
                    )}
                  />
                  {router.title}
                </div>

                {router.children && <ChevronDownIcon size={18} />}
              </Button>
            );
          })}
        </Collapsible>

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
