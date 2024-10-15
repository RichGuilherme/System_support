import { Button } from "@/components/ui/atoms/button";
import { TableSimple } from "@/components/ui/molecules/tableSimples";
import Container from "@/components/ui/organisms/container";
import { PlusIcon } from "lucide-react";
import React from "react";

const ClientPortal = () => {
  return (
    <Container
      title="Portal do cliente"
      width="100%"
      rightContent={
        <>
          <Button variant="secondary" className="button-action">
            <PlusIcon size={18} />
            Usuário cliente
          </Button>
        </>
      }
    >
      <TableSimple columns={[]} data={[]} />
    </Container>
  );
};

export default ClientPortal;
