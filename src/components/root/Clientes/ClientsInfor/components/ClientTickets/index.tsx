import { Button } from "@/components/ui/atoms/button";
import { TableSimple } from "@/components/ui/molecules/table";
import Container from "@/components/ui/organisms/container";
import React from "react";

const TableClientTickets = () => {
  return (
    <Container
      title="Tickets"
      width="100%"
      rightContent={
        <>
          <Button></Button>
        </>
      }
    >
      <TableSimple columns={[]} data={[]} />
    </Container>
  );
};

export default TableClientTickets;
