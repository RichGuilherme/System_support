"use client";
import { Button } from "@/components/ui/atoms/button";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/atoms/tabs";

import ResourceInformations from "./ResourceInformations";
import ResourceTickets from "./ResourceTickets";
import { useMemo } from "react";
import ResourceTechnical from "./ResourceTechnical";

const RecursosInfor = ({ paramsValue }: { paramsValue: string }) => {
  const tabs = useMemo(
    () => [
      {
        label: "Informações",
        value: "informations",
        component: <ResourceInformations />,
      },
      {
        label: "Especificações técnicas",
        value: "technicalSpecifications",
        component: <ResourceTechnical />,
      },
      // {
      //   label: "Software e lincença",
      //   value: "softwareLincece",
      // },
      // {
      //   label: "Gatilhos",
      //   value: "trigger",
      // },
      // {
      //   label: "Arquivos",
      //   value: "file",
      // },
      {
        label: "Tickets",
        value: "tickets",
        component: <ResourceTickets />,
      },
    ],
    [],
  );

  return (
    <Tabs defaultValue="informations" className="page-container">
      <div className="mb-4 flex w-full items-end justify-between">
        <div className="flex flex-col gap-2">
          <h1 className="text-base font-semibold">Recursos</h1>

          <div className="flex flex-row items-center gap-2">
            <span className="text-sm text-textSimples-300">Richard</span>
            <span className="flex items-center border border-green-500 px-2 py-1 text-center text-xs text-green-500">
              Software
            </span>
          </div>
        </div>

        <Button className="button-action" variant="secondary">
          Editar informatações
        </Button>
      </div>

      <TabsList>
        {tabs.map((tab) => (
          <TabsTrigger key={tab.value} value={tab.value}>
            {tab.label}
          </TabsTrigger>
        ))}
      </TabsList>

      {tabs.map((tab) => (
        <TabsContent key={tab.value} value={tab.value}>
          {tab.component}
        </TabsContent>
      ))}
    </Tabs>
  );
};

export default RecursosInfor;
