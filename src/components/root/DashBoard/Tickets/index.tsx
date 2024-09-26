"use client";

import Container from "@/components/ui/organisms/container";
import {
  CircleEllipsisIcon,
  CircleStopIcon,
  TicketIcon,
  TriangleAlertIcon,
  UserIcon,
} from "lucide-react";
import ButtonType from "./components/ButtonType";

const DashboardTickets = () => {
  return (
    <div className="flex flex-col gap-y-5">
      <div className="flex justify-center gap-5">
        <Container
          width="50%"
          gradientColor="gradient_color-left"
          title="Resumo de tickets"
        >
          <div className="flex w-full flex-row justify-between px-9">
            <ButtonType
              icon={TicketIcon}
              type="Todos"
              valueNumber={50}
              color="green-500"
            />
            <ButtonType
              icon={UserIcon}
              type="Meus"
              valueNumber={0}
              color="cyan-500"
            />
            <ButtonType
              icon={TicketIcon}
              type="Não atendidos"
              valueNumber={24}
              color="blue-400"
            />
            <ButtonType
              icon={CircleEllipsisIcon}
              type="Em andamento"
              valueNumber={20}
              color="green-500"
            />
            <ButtonType
              icon={CircleStopIcon}
              type="Pausados"
              valueNumber={14}
              color="yellow-500"
            />
            <ButtonType
              icon={TriangleAlertIcon}
              type="Vencidos"
              valueNumber={13}
              color="red-500"
            />
          </div>
        </Container>

        <Container
          width="50%"
          gradientColor="gradient_color-right"
          title="Resumo de tickets"
        >
          <div className="flex w-full flex-row justify-between px-28">
            <ButtonType
              icon={TicketIcon}
              type="Todos"
              valueNumber={5}
              color="teal-800"
            />

            <ButtonType
              icon={TicketIcon}
              type="Meus"
              valueNumber={0}
              color="yellow-500"
            />
          </div>
        </Container>
      </div>

      <div className="flex w-full flex-row gap-x-4">
        <Container
          height="550px"
          width="50%"
          gradientColor="gradient_color-meio"
          title="Tickets em andamento"
        >
          Teste
        </Container>

        <div className="flex w-1/2 flex-col gap-y-5">
          <Container
            height="30%"
            width="100%"
            gradientColor="gradient_color-topLeft"
            title="Vencimento de atendimento"
          >
            Teste
          </Container>

          <Container
            height="30%"
            width="100%"
            gradientColor="gradient_color-topLeft"
            title="Vencimento de solução"
          >
            Teste
          </Container>
        </div>
      </div>
    </div>
  );
};

export default DashboardTickets;
