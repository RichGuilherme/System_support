"use client";
import Container from "@/components/ui/organisms/container";

const DashboardTickets = () => {
  return (
    <div className="grid grid-cols-3 grid-rows-3">
      <Container
        gradientColor={"gradient_color-right"}
        title="Resumo de tickets"
      >
        <span>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias
          fugit odio, dignissimos exercitationem tenetur quae neque ad
          consequuntur aliquam optio dicta veniam rat
        </span>
      </Container>
    </div>
  );
};

export default DashboardTickets;
