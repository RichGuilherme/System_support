import { Button } from "@/components/ui/atoms/button";
import { TableSimple } from "@/components/ui/molecules/tableSimples";
import Container from "@/components/ui/organisms/container";
import React from "react";
import { column } from "./table/column";

const GroupAttendants = () => {
  return (
    <Container
      title="Grupo de atendentes"
      rightContent={
        <>
          <Button variant="secondary" className="button-action">
            Adicionar gropo de atendimento
          </Button>
        </>
      }
    >
      <TableSimple columns={column} data={[]} />
    </Container>
  );
};

export default GroupAttendants;
