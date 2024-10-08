import IndicatorBadge from "@/components/ui/molecules/indicatorBadge";
import Container from "@/components/ui/organisms/container";
import { ClipboardIcon, PlayCircleIcon, TicketSlash } from "lucide-react";

const Pending = () => {
  return (
    <Container height="165px" width="100%" title="Pendentes">
      <div className="indicator-flex-container px-10">
        <IndicatorBadge
          icon={TicketSlash}
          type="Pré-tickets"
          valueIndicator={0}
          color="text-yellow"
        />

        <IndicatorBadge
          icon={ClipboardIcon}
          type="Autorizações pendentes"
          valueIndicator={0}
          color="text-cyan"
        />

        <IndicatorBadge
          icon={PlayCircleIcon}
          type="Pré-apontamentos"
          valueIndicator={9}
          color="text-blue"
        />
      </div>
    </Container>
  );
};

export default Pending;
