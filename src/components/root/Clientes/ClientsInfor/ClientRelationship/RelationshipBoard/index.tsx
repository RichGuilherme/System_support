import { Button } from "@/components/ui/atoms/button";
import { TableSimple } from "@/components/ui/molecules/tableSimples";
import Container from "@/components/ui/organisms/container";
import { PlusIcon } from "lucide-react";
import React from "react";
import { columns } from "./table/columns";

const RelationshipBoard = () => {
  return (
    <Container
      title="Mesas"
      width="100%"
      rightContent={
        <>
          <Button variant="secondary" className="button-action">
            <PlusIcon />
            Adicionar mesa de serviço
          </Button>
        </>
      }
    >
      <TableSimple columns={columns} data={[]} />
    </Container>
  );
};

export default RelationshipBoard;
