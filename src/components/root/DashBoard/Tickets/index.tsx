"use client";

import Container from "@/components/ui/organisms/container";

const DashboardTickets = () => {
  return (
    <div className="grid grid-cols-3 grid-rows-3">
      <Container
        width={"500px"}
        height={"200px"}
        gradientColor={"gradient_color-topLeft"}
      >
        <h1>Tickets</h1>
      </Container>
    </div>
  );
};

export default DashboardTickets;
