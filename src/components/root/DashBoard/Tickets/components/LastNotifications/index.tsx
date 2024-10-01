import Container from "@/components/ui/organisms/container";
import { TicketIcon } from "lucide-react";
import React from "react";

const LastNotifications = () => {
  return (
    <>
      <Container height="720px" width="100%" title="Últimas notificações">
        <div className="flex flex-row items-center justify-between">
          <div className="flex items-center gap-3">
            <TicketIcon />

            <div>
              <p className="text-base font-medium text-highlight-primary">
                Novo pré-ticket
              </p>
              <p className="text-textSimples-300">
                Fwd: ENC: Acesso ao servidor
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <span>17/09/2024</span>
            <span>09:58</span>
          </div>
        </div>
      </Container>
    </>
  );
};

export default LastNotifications;
