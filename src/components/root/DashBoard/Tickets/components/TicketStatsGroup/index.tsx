import {
  RESUMETICKETS,
  UNRESPONDEDTICKETS,
} from "@/components/data/mockups/dashboard";
import IndicatorBadge from "@/components/ui/molecules/indicatorBadge";
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
      <Container width="50%" title="Resumo de tickets">
        <div className="indicator-flex-container px-7">
          <IndicatorBadge
            icon={TicketIcon}
            type="Todos"
            valueIndicator={ticketsResumeData.ALL}
            color="text-green-default"
          />
          <IndicatorBadge
            icon={UserIcon}
            type="Meus"
            valueIndicator={ticketsResumeData.MY}
            color="text-cyan"
          />
          <IndicatorBadge
            icon={TicketIcon}
            type="Não atendidos"
            valueIndicator={ticketsResumeData.NOTATTENDED}
            color="text-blue"
          />
          <IndicatorBadge
            icon={CircleEllipsisIcon}
            type="Em andamento"
            valueIndicator={ticketsResumeData.INPROGRESS}
            color="text-green-default"
          />
          <IndicatorBadge
            icon={CircleStopIcon}
            type="Pausados"
            valueIndicator={ticketsResumeData.STOPED}
            color="text-yellow"
          />
          <IndicatorBadge
            icon={TriangleAlertIcon}
            type="Vencidos"
            valueIndicator={ticketsResumeData.EXPIRED}
            color="text-red"
          />
        </div>
      </Container>

      <Container width="50%" title="Tickets sem resposta">
        <div className="indicator-flex-container px-28">
          <IndicatorBadge
            icon={TicketIcon}
            type="Todos"
            valueIndicator={ticketSemRepostaData.ALL}
            color="text-teal"
          />

          <IndicatorBadge
            icon={TicketIcon}
            type="Meus"
            valueIndicator={ticketSemRepostaData.MY}
            color="text-yellow"
          />
        </div>
      </Container>
    </div>
  );
};

export default TicketStatsGroup;
