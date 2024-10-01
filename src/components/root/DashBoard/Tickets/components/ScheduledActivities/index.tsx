import Container from "@/components/ui/organisms/container";
import TableScheduleActivies from "./table";
import { CalendarCheckIcon } from "lucide-react";
import React from "react";

const ScheduledActivities = () => {
  const count = 2;
  return (
    <Container
      height="586px"
      width="100%"
      gradientColor="gradient_color-meio"
      title="Atividades agendadas"
      subTitle={
        <>
          <CalendarCheckIcon size={17} className="text-green-400" />
          <p>{count} atividades</p>
        </>
      }
    >
      <TableScheduleActivies />
    </Container>
  );
};

export default ScheduledActivities;
