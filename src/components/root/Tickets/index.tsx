"use client";

import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/atoms/tabs";
import { ListIcon } from "lucide-react";
import TicketsTable from "./components/TicketsTable";
import NavButtons from "./components/NavButtons";

const Tickets = () => {
  return (
    <Tabs defaultValue="list" className="page-container">
      <NavButtons />

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
