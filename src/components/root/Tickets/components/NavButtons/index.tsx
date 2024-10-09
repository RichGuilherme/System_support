import {
  ListXIcon,
  ShieldCheckIcon,
  TicketCheckIcon,
  TicketIcon,
} from "lucide-react";
import { Button } from "@/components/ui/atoms/button";

const NavButtons = () => {
  return (
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
  );
};

export default NavButtons;
