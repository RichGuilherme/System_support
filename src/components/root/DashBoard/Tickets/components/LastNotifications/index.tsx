import Container from "@/components/ui/organisms/container";
import { BellDot, TicketIcon } from "lucide-react";

const LastNotifications = () => {
  return (
    <>
      <Container
        height="720px"
        width="100%"
        title="Últimas notificações"
        subTitle={
          <>
            <BellDot size={17} className="text-green-400" />
            <p>1 notificação</p>
          </>
        }
      >
        <div className="flex flex-row items-center justify-between rounded-xl bg-background p-2 px-3">
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
