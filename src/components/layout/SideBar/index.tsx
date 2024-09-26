"use client";

import { Button } from "@/components/ui/atoms/button";
import { Routers } from "@/constant";

import { usePathname, useRouter } from "next/navigation";
import { ChevronDownIcon, HeadsetIcon, LogOutIcon, Plus } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  Collapsible,
  CollapsibleTrigger,
} from "@/components/ui/atoms/collapsible";
import { CollapsibleContent } from "@radix-ui/react-collapsible";
import React, { useRef } from "react";

export const SideBar = () => {
  const router = useRouter();
  const pathname = usePathname();
  const firstSegment = pathname.split("/")[1];

  const collapsibleRefs = useRef<{ [key: string]: HTMLElement | null }>({});

  const handleButtonNav = (url: string) => {
    router.push(url);

    Object.values(collapsibleRefs.current).forEach((collapsible) => {
      if (collapsible?.getAttribute("data-state") === "open") {
        collapsible.querySelector("button")?.click();
      }
    });
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
        {/* barra divisoria */}
      </div>

      <Button
        variant="outline"
        className="flex w-10/12 gap-1 rounded-2xl border-highlight-verdinho px-1 py-2 text-sm text-sidebar-foreground"
      >
        <Plus className="icon-sm text-sidebar-foreground" />
        Abrir novo ticket
      </Button>

      <nav className="flex h-full w-full flex-col justify-between">
        <ul>
          {Routers.map((router) => {
            const IconComponent = router.icon;

            return (
              <li key={`buttonNav-${router.name}`}>
                {router.child === false ? (
                  <Button
                    className={cn(
                      "flex w-full flex-row justify-between rounded-none px-5 py-3 text-sm font-light text-textSimples-200 hover:text-sidebar-foreground",
                      firstSegment === `${router.name}` &&
                        "bg-gradient-to-r from-[var(--verdinho-350)] from-10% font-medium text-sidebar-foreground",
                    )}
                    onClick={() => handleButtonNav(router.url)}
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
                  </Button>
                ) : (
                  <Collapsible
                    ref={(el) => {
                      collapsibleRefs.current[router.name] = el;
                    }}
                  >
                    <CollapsibleTrigger className="group w-full">
                      <div
                        className={cn(
                          "group flex w-full flex-row justify-between rounded-none px-5 py-3 text-sm font-light text-textSimples-200 hover:text-sidebar-foreground",
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

                        {router.children && (
                          <ChevronDownIcon
                            size={18}
                            className={cn(
                              "hidden group-hover:block group-data-[state=open]:block",
                            )}
                          />
                        )}
                      </div>
                    </CollapsibleTrigger>

                    {router.children && (
                      <CollapsibleContent className="flex flex-col items-start bg-[var(--azul-900)]">
                        {router.children.map((router) => {
                          const IconComponent = router.icon;

                          return (
                            <Button
                              key={`collpsibleButton-${router.name}`}
                              variant="ghost"
                              className="flex w-full justify-start gap-3 rounded-none py-2 pl-8 text-sm font-light text-textSimples-200"
                              onClick={() => handleButtonNav(router.url)}
                            >
                              <IconComponent size={20} />
                              {router.title}
                            </Button>
                          );
                        })}
                      </CollapsibleContent>
                    )}
                  </Collapsible>
                )}
              </li>
            );
          })}
        </ul>

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
