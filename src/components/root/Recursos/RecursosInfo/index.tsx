"use client";
import { Button } from "@/components/ui/atoms/button";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/atoms/tabs";
import Container from "@/components/ui/organisms/container";
import ResourceInformations from "./ResourceInformations";
import { Component } from "lucide-react";
import ResourceTickets from "./ResourceTickets";

const RecursosInfor = ({ paramsValue }: { paramsValue: string }) => {
  const tabs = [
    {
      label: "Informações",
      value: "informations",
      component: <ResourceInformations />,
    },
    {
      label: "Especificações técnicas",
      value: "technicalSpecifications",
    },

    {
      label: "Software e lincença",
      value: "softwareLincece",
    },
    {
      label: "Gatilhos",
      value: "trigger",
    },
    {
      label: "Arquivos",
      value: "file",
    },
    {
      label: "Tickets",
      value: "tickets",
      component: <ResourceTickets />,
    },
  ];

  return (
    <Container
      width="100%"
      height="auto"
      title="Recursos"
      subTitle={
        <div className="flex flex-row items-center gap-3 text-green-500">
          <span className="text-lg">Richard</span>
          <span className="flex items-center border border-green-400 px-2 py-1 text-center">
            Software
          </span>
        </div>
      }
      rightContent={
        <>
          <Button className="button-action" variant="secondary">
            Editar informatações
          </Button>
        </>
      }
    >
      <Tabs defaultValue="informations" className="page-container pt-6">
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
    </Container>
  );
};

export default RecursosInfor;
