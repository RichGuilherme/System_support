import { REVIEWSTICKETS } from "@/components/data/mockups/dashboard";
import { Badge } from "@/components/ui/atoms/badge";
import { Ratings } from "@/components/ui/atoms/ratings";
import Container from "@/components/ui/organisms/container";
import { DatabaseIcon } from "lucide-react";
import React from "react";

const ReviewTicketsGroup = () => {
  const reviewsTickets = REVIEWSTICKETS;

  return (
    <div className="flex gap-4">
      <Container width="50%" title="Avaliação geral de tickets (30 dias)">
        <div className="flex flex-col items-center gap-3">
          {!!reviewsTickets.REVIEWSTICKETSGENERAL ? (
            <>
              <Ratings
                rating={reviewsTickets.REVIEWSTICKETSGENERAL}
                variant="yellow"
              />
              <span>
                Média da organização: {reviewsTickets.REVIEWSTICKETSGENERAL}
              </span>
            </>
          ) : (
            <Badge
              variant="ghost"
              className="flex flex-col items-center text-xl text-textSimples-300"
            >
              <DatabaseIcon size={35} />
              Não a dados
            </Badge>
          )}
        </div>
      </Container>

      <Container width="50%" title="Avaliação do meus tickets (30 dias)">
        <div className="flex flex-col items-center gap-3">
          {!!reviewsTickets.REVIEWSMYTICKETS ? (
            <>
              <Ratings
                rating={reviewsTickets.REVIEWSMYTICKETS}
                variant="yellow"
              />
              <span>
                Média da organização: {reviewsTickets.REVIEWSMYTICKETS}
              </span>
            </>
          ) : (
            <Badge
              variant="ghost"
              className="flex flex-col items-center text-xl text-textSimples-300"
            >
              <DatabaseIcon size={35} />
              Não a dados
            </Badge>
          )}
        </div>
      </Container>
    </div>
  );
};

export default ReviewTicketsGroup;
