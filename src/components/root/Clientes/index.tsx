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
        <div className="flex items-center gap-1 text-lg text-green-500">
          <Contact2Icon size={18} />
          15
        </div>
      }
      rightContent={
        <Button variant="secondary" className="button-action">
          <PlusIcon size={18} />
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
