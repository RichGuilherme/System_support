import {
  RESUMETICKETS,
  UNRESPONDEDTICKETS,
} from "@/components/data/mockups/dashboard";
import IndicatorBadge from "@/components/ui/atoms/indicatorBadge";
import Container from "@/components/ui/organisms/container";
import {
  CircleEllipsisIcon,
  CircleStopIcon,
  TicketIcon,
  TriangleAlertIcon,
  UserIcon,
} from "lucide-react";

const TicketStatsGroup = () => {
  const ticketsResumeData = RESUMETICKETS;
  const ticketSemRepostaData = UNRESPONDEDTICKETS;

  return (
    <div className="flex justify-center gap-4">
      <Container
        width="50%"
        gradientColor="gradient_color-left"
        title="Resumo de tickets"
      >
        <div className="indicator-flex-container px-7">
          <IndicatorBadge
            icon={TicketIcon}
            type="Todos"
            valueNumber={ticketsResumeData.ALL}
            color="text-green-500"
          />
          <IndicatorBadge
            icon={UserIcon}
            type="Meus"
            valueNumber={ticketsResumeData.MY}
            color="text-cyan-500"
          />
          <IndicatorBadge
            icon={TicketIcon}
            type="Não atendidos"
            valueNumber={ticketsResumeData.NOTATTENDED}
            color="text-blue-400"
          />
          <IndicatorBadge
            icon={CircleEllipsisIcon}
            type="Em andamento"
            valueNumber={ticketsResumeData.INPROGRESS}
            color="text-green-500"
          />
          <IndicatorBadge
            icon={CircleStopIcon}
            type="Pausados"
            valueNumber={ticketsResumeData.STOPED}
            color="text-yellow-500"
          />
          <IndicatorBadge
            icon={TriangleAlertIcon}
            type="Vencidos"
            valueNumber={ticketsResumeData.EXPIRED}
            color="text-red-500"
          />
        </div>
      </Container>

      <Container
        width="50%"
        gradientColor="gradient_color-right"
        title="Tickets sem resposta"
      >
        <div className="indicator-flex-container px-28">
          <IndicatorBadge
            icon={TicketIcon}
            type="Todos"
            valueNumber={ticketSemRepostaData.ALL}
            color="text-teal-800"
          />

          <IndicatorBadge
            icon={TicketIcon}
            type="Meus"
            valueNumber={ticketSemRepostaData.MY}
            color="text-yellow-500"
          />
        </div>
      </Container>
    </div>
  );
};

export default TicketStatsGroup;
