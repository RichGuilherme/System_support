"use client";

import { Button } from "@/components/ui/atoms/button";
import Container from "@/components/ui/organisms/container";
import { DotIcon } from "lucide-react";

const SubTitle = () => {
  return <p>Teste</p>;
};
const RightContent = () => {
  return (
    <Button>
      teste
      <DotIcon />
    </Button>
  );
};

const DashboardTickets = () => {
  return (
    <div className="grid grid-cols-3 grid-rows-3">
      <Container
        width={"500px"}
        height={"200px"}
        gradientColor={"gradient_color-topLeft"}
        title="Resumo de tickets"
        subTitle={<SubTitle />}
        rightContent={<RightContent />}
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
