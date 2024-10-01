import Container from "@/components/ui/organisms/container";
import NavMenu from "./NavMenu";
import PieChart from "./PieChart";
import { useState } from "react";

const TicketsInProgress = () => {
  const [data, setData] = useState({
    responsaveis: [],
    mesas: [],
    clientes: [],
    tiposDeRecursos: [],
  });

  return (
    <>
      <Container
        width="100%"
        height="570px"
        gradientColor="gradient_color-meio"
        title="Tickets em andamento"
      >
        <NavMenu />
        <PieChart />
      </Container>
    </>
  );
};

export default TicketsInProgress;
