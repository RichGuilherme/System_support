import { Button } from "@/components/ui/atoms/button";
import { TableSimple } from "@/components/ui/molecules/tableSimples";
import Container from "@/components/ui/organisms/container";
import React from "react";
import { columns } from "./table/columns";
import { clientTicketsData } from "./table/data/clientTicketsData";

const ClientTickets = () => {
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

export default ClientTickets;
