"use client";

import Container from "@/components/ui/organisms/container";
import { GaugeIcon } from "lucide-react";
import React from "react";
import ContractsTable from "./components/ContractsTable";
import RightContent from "./components/RightContent";

const Contratos = () => {
  return (
    <Container
      title="Contratos"
      subTitle={
        <div className="flex items-center gap-1 text-lg text-green-500">
          <GaugeIcon size={23} /> 3
        </div>
      }
      rightContent={<RightContent />}
      style="gap-y-7"
      width="100%"
    >
      <ContractsTable />
    </Container>
  );
};

export default Contratos;
