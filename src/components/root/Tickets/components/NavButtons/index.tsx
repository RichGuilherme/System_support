import {
  ListXIcon,
  ShieldCheckIcon,
  TicketCheckIcon,
  TicketIcon,
} from "lucide-react";
import { Button } from "@/components/ui/atoms/button";
import Container from "@/components/ui/organisms/container";

const NavButtons = () => {
  return (
    <Container title="Tickets" width="100%" style="mb-4">
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
    </Container>
  );
};

export default NavButtons;
