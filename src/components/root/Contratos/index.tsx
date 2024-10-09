"use client";
import { Button } from "@/components/ui/atoms/button";
import Container from "@/components/ui/organisms/container";
import { GaugeIcon, PlusIcon } from "lucide-react";
import React from "react";
import ContractsTable from "./components/ContractsTable";

const Contratos = () => {
  return (
    <Container
      title="Contratos"
      subTitle={
        <div className="flex items-center gap-1 text-lg text-green-500">
          <GaugeIcon size={23} /> 3
        </div>
      }
      rightContent={
        <Button
          variant="secondary"
          className="flex items-center gap-2 px-4 py-2"
        >
          <PlusIcon size={22} />
          Contratos
        </Button>
      }
      style="gap-y-7"
      width="100%"
    >
      <ContractsTable />
    </Container>
  );
};

export default Contratos;
