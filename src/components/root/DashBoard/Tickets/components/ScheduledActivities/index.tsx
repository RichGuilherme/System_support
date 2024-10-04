import Container from "@/components/ui/organisms/container";
import TableScheduleActivies from "./table";
import { CalendarCheckIcon } from "lucide-react";

const ScheduledActivities = () => {
  const count = 2;
  return (
    <Container
      height="586px"
      width="100%"
      title="Atividades agendadas"
      subTitle={
        <>
          <CalendarCheckIcon size={17} className="text-green-light" />
          <p>{count} atividades</p>
        </>
      }
    >
      <TableScheduleActivies />
    </Container>
  );
};

export default ScheduledActivities;
