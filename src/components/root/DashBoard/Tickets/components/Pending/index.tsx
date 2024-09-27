import IndicatorBadge from "@/components/ui/atoms/indicatorBadge";
import Container from "@/components/ui/organisms/container";
import { ClipboardIcon, PlayCircleIcon, TicketSlash } from "lucide-react";

const Pending = () => {
  return (
    <Container
      height="165px"
      width="100%"
      gradientColor="gradient_color-topLeft"
      title="Pendentes"
    >
      <div className="indicator-flex-container px-10">
        <IndicatorBadge
          icon={TicketSlash}
          type="Pré-tickets"
          valueNumber={0}
          color="text-yellow-500"
        />

        <IndicatorBadge
          icon={ClipboardIcon}
          type="Autorizações pendentes"
          valueNumber={0}
          color="text-cyan-500"
        />

        <IndicatorBadge
          icon={PlayCircleIcon}
          type="Pré-apontamentos"
          valueNumber={9}
          color="text-blue-400"
        />
      </div>
    </Container>
  );
};

export default Pending;
