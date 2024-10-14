import { Button } from "@/components/ui/atoms/button";
import { TableSimple } from "@/components/ui/molecules/table";
import Container from "@/components/ui/organisms/container";
import React from "react";
import { columns } from "./TableClientTickets/columns";
import { clientTicketsData } from "./TableClientTickets/data/clientTicketsData";

const TableClientTickets = () => {
  return (
    <Container
      title="Tickets"
      width="100%"
      rightContent={
        <>
          <Button variant="secondary" className="px-4 py-2">
            Filtrar
          </Button>
        </>
      }
    >
      <TableSimple columns={columns} data={clientTicketsData} />
    </Container>
  );
};

export default TableClientTickets;
