import Container from "@/components/ui/organisms/container";
import PieChartComponent from "./PieChart";

const TicketsInProgress = () => {
  return (
    <>
      <Container width="100%" height="570px" title="Tickets em andamento">
        <PieChartComponent />
      </Container>
    </>
  );
};

export default TicketsInProgress;
