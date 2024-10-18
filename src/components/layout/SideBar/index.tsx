"use client";

import { Button } from "@/components/ui/atoms/button";
import { Routers } from "@/constant";
import { usePathname, useRouter } from "next/navigation";
import {
  ChevronDownIcon,
  ChevronsRightIcon,
  LogOutIcon,
  Plus,
} from "lucide-react";
import { cn } from "@/lib/utils";
import {
  Collapsible,
  CollapsibleTrigger,
} from "@/components/ui/atoms/collapsible";
import { CollapsibleContent } from "@radix-ui/react-collapsible";
import { useRef, useState } from "react";

export const SideBar = () => {
  const [expansed, setExpansed] = useState(true);
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

  return (
    <aside
      className={cn(
        "gradient_azul transition-width flex h-screen w-64 flex-col items-center space-y-4 rounded-br-2xl py-5 text-sidebar-foreground shadow-md transition-all duration-300 ease-in-out",
        !expansed && "w-auto",
      )}
    >
      <Button
        variant="outline"
        className="mb-4 mt-3 flex w-10/12 gap-1 rounded-xl border-highlight-verdinho px-1 py-2 text-sm text-sidebar-foreground"
      >
        <Plus className="icon-sm text-sidebar-foreground" />
        {expansed && "Abrir novo ticket"}
      </Button>

      <nav className="flex h-full w-full flex-col justify-between">
        <ul>
          {Routers.map((router) => {
            const IconComponent = router.icon;
            const isChild = !!router.children;

            return (
              <li key={`buttonNav-${router.name}`}>
                {isChild ? (
                  <Collapsible
                    ref={(el) => {
                      collapsibleRefs.current[router.name] = el;
                    }}
                    className="group"
                  >
                    <CollapsibleTrigger className="group w-full">
                      <div
                        className={cn(
                          "flex w-full flex-row justify-between rounded-none px-5 py-3 text-sm font-light text-textSimples-200 hover:text-sidebar-foreground",
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
                          {expansed && router.title}
                        </div>

                        {expansed && router.children && (
                          <ChevronDownIcon
                            size={18}
                            className={cn(
                              "group-data-[state=open]:block group-data-[state=open]:rotate-180",
                            )}
                          />
                        )}
                      </div>
                    </CollapsibleTrigger>

                    {Array.isArray(router.children) === true && (
                      <CollapsibleContent className="flex flex-col items-start bg-[var(--azul-900)]">
                        {router.children.map((childRouter) => {
                          const ChildIconComponent = childRouter.icon;

                          return (
                            <Button
                              key={`collpsibleButton-${childRouter.name}`}
                              variant="ghost"
                              className="flex w-full justify-start gap-3 rounded-none py-2 pl-5 text-sm font-light text-textSimples-200"
                              onClick={() => handleButtonNav(childRouter.url)}
                            >
                              <ChildIconComponent size={20} />
                              {expansed && childRouter.title}
                            </Button>
                          );
                        })}
                      </CollapsibleContent>
                    )}
                  </Collapsible>
                ) : (
                  <Button
                    className={cn(
                      "flex w-full flex-row justify-between rounded-none px-5 py-3 text-sm font-light text-textSimples-200 hover:text-sidebar-foreground",
                      firstSegment === `${router.name}` &&
                        "bg-gradient-to-r from-[var(--verdinho-350)] from-10% font-medium text-sidebar-foreground",
                    )}
                    onClick={() => handleButtonNav(router.url || "")}
                  >
                    <div className="flex flex-row gap-3">
                      <IconComponent
                        size={20}
                        className={cn(
                          firstSegment === `${router.name}` &&
                            "text-highlight-verdinho",
                        )}
                      />
                      {expansed && router.title}
                    </div>
                  </Button>
                )}
              </li>
            );
          })}
        </ul>

        <div className="relative">
          <div className="absolute -right-4 bottom-10">
            <Button
              variant="secondary"
              className={cn(
                "rounded-full border-slate-400 bg-[var(--azul-900)] p-1",
                !expansed && "transition-transfor rotate-180 duration-500",
              )}
              onClick={() => setExpansed((prev) => !prev)}
            >
              <ChevronsRightIcon size={26} />
            </Button>
          </div>

          <div
            className={cn(
              "border-borde flex justify-start border-t border-slate-400",
              !expansed && "",
            )}
          >
            <Button
              variant="ghost"
              className="ml-4 mt-4 flex gap-2 border-t border-none text-textSimples-200"
              onClick={() => router.push("/cadastra")}
            >
              <LogOutIcon size={20} />
              {expansed && "Sair"}
            </Button>
          </div>
        </div>
      </nav>
    </aside>
  );
};
