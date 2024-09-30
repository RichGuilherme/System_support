import IndicatorBadge from "@/components/ui/atoms/indicatorBadge";
import Container from "@/components/ui/organisms/container";
import { CheckCircle } from "lucide-react";
import React from "react";

const MyAppointedHours = () => {
  return (
    <>
      <Container
        height="549px"
        width="100%"
        gradientColor="gradient_color-right"
        title="Minhas horas apontadas"
      >
        <div className="indicator-flex-container px-24">
          <IndicatorBadge
            icon={CheckCircle}
            type="Ontem"
            valueIndicator="00:00"
            color="text-cyan-500"
          />

          <IndicatorBadge
            icon={CheckCircle}
            type="Hoje"
            valueIndicator="00:00"
            color="text-yellow-500"
          />
        </div>
      </Container>
    </>
  );
};

export default MyAppointedHours;
