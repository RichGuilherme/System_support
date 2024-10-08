"use client";

import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/atoms/tabs";
import {
  ListIcon,
  ListXIcon,
  ShieldCheckIcon,
  TicketCheckIcon,
  TicketIcon,
} from "lucide-react";
import TicketsTable from "./TicketsTable";
import { Button } from "@/components/ui/atoms/button";

const Tickets = () => {
  return (
    <Tabs defaultValue="list" className="page-container">
      <div className="flex w-full flex-row justify-start gap-x-4">
        <Button variant="outline" className="gap-1 px-3 py-2">
          <TicketIcon /> Pré-tickets
        </Button>
        <Button variant="outline" className="gap-1 px-3 py-2">
          <ShieldCheckIcon /> Autorizações
        </Button>
        <Button variant="outline" className="gap-1 px-3 py-2">
          <ListXIcon /> Tickets em revisão
        </Button>
        <Button variant="outline" className="gap-1 px-3 py-2">
          <TicketCheckIcon /> Tickets fechados
        </Button>
      </div>

      <TabsList>
        <TabsTrigger value="list">
          <ListIcon size={25} />
          Lista
        </TabsTrigger>

        <TabsTrigger value="kankan">Kanban (off)</TabsTrigger>
      </TabsList>

      <TabsContent value="list">
        <TicketsTable />
      </TabsContent>
    </Tabs>
  );
};

export default Tickets;
