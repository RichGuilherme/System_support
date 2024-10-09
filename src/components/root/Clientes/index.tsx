"use client";

import { Button } from "@/components/ui/atoms/button";
import Container from "@/components/ui/organisms/container";
import { Contact2Icon, PlusIcon } from "lucide-react";
import React from "react";
import ClientTable from "./components/ClientTable";

const Clientes = () => {
  return (
    <Container
      title="Clientes"
      subTitle={
        <div className="flex items-center gap-1 text-green-500">
          <Contact2Icon /> 15
        </div>
      }
      rightContent={
        <Button
          variant="secondary"
          className="flex items-center gap-2 px-4 py-2"
        >
          <PlusIcon size={22} />
          Clientes
        </Button>
      }
      style="gap-y-7"
      width="100%"
    >
      <ClientTable />
    </Container>
  );
};

export default Clientes;
