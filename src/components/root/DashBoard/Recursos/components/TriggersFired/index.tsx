import Container from "@/components/ui/organisms/container";
import TableTriggersFired from "./table";
import { TooltipsIcon } from "@/components/ui/molecules/tooltips/tooltipIcon";

const TriggersFired = () => {
  return (
    <Container
      height="586px"
      width="100%"
      title="Gatilhos disparados"
      rightContent={
        <TooltipsIcon content="Tabela contendo gatilhos disparados e não resolvidos ainda" />
      }
    >
      <TableTriggersFired />
    </Container>
  );
};

export default TriggersFired;
