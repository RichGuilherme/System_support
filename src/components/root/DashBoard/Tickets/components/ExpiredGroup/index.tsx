import {
  SERVICEDUEDATE,
  SERVICESOLUCTION,
} from "@/components/data/mockups/dashboard";
import IndicatorBadge from "@/components/ui/atoms/indicatorBadge";
import Container from "@/components/ui/organisms/container";
import { AlertTriangleIcon, Clock12Icon } from "lucide-react";
import React from "react";

const ExpiredGroup = () => {
  const vencimentoAtendimentoData = SERVICEDUEDATE;
  const vencimentoSoluções = SERVICESOLUCTION;

  return (
    <>
      <Container width="100%" title="Vencimento de atendimento">
        <div className="indicator-flex-container">
          <IndicatorBadge
            icon={Clock12Icon}
            type="Todos"
            valueIndicator={vencimentoAtendimentoData.ALL}
            color="text-teal-800"
          />
          <IndicatorBadge
            icon={AlertTriangleIcon}
            type="Hoje"
            valueIndicator={vencimentoAtendimentoData.TODAY}
            color="text-yellow-500"
          />
          <IndicatorBadge
            icon={AlertTriangleIcon}
            type="Amanhã"
            valueIndicator={vencimentoAtendimentoData.TOMORROW}
            color="text-blue-400"
          />
          <IndicatorBadge
            icon={AlertTriangleIcon}
            type="Depois"
            valueIndicator={vencimentoAtendimentoData.AFTER}
            color="text-cyan-500"
          />
        </div>
      </Container>

      <Container width="100%" title="Vencimento de solução">
        <div className="indicator-flex-container">
          <IndicatorBadge
            icon={Clock12Icon}
            type="Todos"
            valueIndicator={vencimentoSoluções.ALL}
            color="text-teal-800"
          />
          <IndicatorBadge
            icon={AlertTriangleIcon}
            type="Hoje"
            valueIndicator={vencimentoSoluções.TODAY}
            color="text-yellow-500"
          />
          <IndicatorBadge
            icon={AlertTriangleIcon}
            type="Amanhã"
            valueIndicator={vencimentoSoluções.TOMORROY}
            color="text-blue-400"
          />
          <IndicatorBadge
            icon={AlertTriangleIcon}
            type="Depois"
            valueIndicator={vencimentoSoluções.AFTER}
            color="text-cyan-500"
          />
        </div>
      </Container>
    </>
  );
};

export default ExpiredGroup;
