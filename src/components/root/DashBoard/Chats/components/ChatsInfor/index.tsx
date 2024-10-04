import { MEUSCHATS, TODOSCHATS } from "@/components/data/mockups/chatsMockados";
import IndicatorBadge from "@/components/ui/molecules/indicatorBadge";
import Container from "@/components/ui/organisms/container";
import {
  ClockIcon,
  HourglassIcon,
  MessageCircleIcon,
  MessageSquareDotIcon,
  MessageSquareMoreIcon,
  MessageSquareTextIcon,
} from "lucide-react";

const ChatsInfor = () => {
  const myChats = MEUSCHATS;
  const allChats = TODOSCHATS;

  return (
    <div className="flex-1 space-x-4">
      <Container title="Meus chats" width="49%">
        <div className="indicator-flex-container h-20 overflow-auto px-1">
          <IndicatorBadge
            icon={MessageCircleIcon}
            type="Em atendimento"
            valueIndicator={myChats.EMATENDIMENTO}
            color="text-green-default"
          />
          <IndicatorBadge
            icon={MessageSquareMoreIcon}
            type="Aguardando resposta"
            valueIndicator={myChats.AGUARDANDORESPONSE}
            color="text-cyan"
          />
          <IndicatorBadge
            icon={HourglassIcon}
            type="Média de espera"
            valueIndicator={myChats.MEDIADAESPERA}
            color="text-blue"
          />
          <IndicatorBadge
            icon={ClockIcon}
            type="Média de atendimento"
            valueIndicator={myChats.MEDIADAATENDIMENTO}
            color="text-teal"
          />
        </div>
      </Container>

      <Container title="Todos os chats" width="49.5%">
        <div className="indicator-flex-container h-20 gap-x-3 overflow-x-auto pb-10">
          <IndicatorBadge
            icon={MessageSquareTextIcon}
            type="Todos"
            valueIndicator={allChats.TODOS}
            color="text-green-default"
          />
          <IndicatorBadge
            icon={MessageCircleIcon}
            type="Em atendimento"
            valueIndicator={allChats.EMATENDIMENTO}
            color="text-yellow"
          />
          <IndicatorBadge
            icon={MessageSquareDotIcon}
            type="Fila de espera"
            valueIndicator={allChats.FILADEESPERA}
            color="text-cyan"
          />
          <IndicatorBadge
            icon={MessageSquareMoreIcon}
            type="Aguardando resposta"
            valueIndicator={allChats.AGUARDANDORESPONSE}
            color="text-yellow"
          />
          <IndicatorBadge
            icon={HourglassIcon}
            type="Média de espera"
            valueIndicator={allChats.MEDIADAESPERA}
            color="text-blue"
          />
          <IndicatorBadge
            icon={ClockIcon}
            type="Média de atendimento"
            valueIndicator={allChats.MEDIADAATENDIMENTO}
            color="text-teal"
          />
        </div>
      </Container>
    </div>
  );
};

export default ChatsInfor;
