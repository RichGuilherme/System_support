import {
  SERVICEDUEDATE,
  SERVICESOLUCTION,
} from "@/components/data/mockups/dashboard";
import IndicatorBadge from "@/components/ui/molecules/indicatorBadge";
import Container from "@/components/ui/organisms/container";
import { AlertTriangleIcon, Clock12Icon } from "lucide-react";

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
            color="text-teal"
          />
          <IndicatorBadge
            icon={AlertTriangleIcon}
            type="Hoje"
            valueIndicator={vencimentoAtendimentoData.TODAY}
            color="text-yellow"
          />
          <IndicatorBadge
            icon={AlertTriangleIcon}
            type="Amanhã"
            valueIndicator={vencimentoAtendimentoData.TOMORROW}
            color="text-blue"
          />
          <IndicatorBadge
            icon={AlertTriangleIcon}
            type="Depois"
            valueIndicator={vencimentoAtendimentoData.AFTER}
            color="text-cyan"
          />
        </div>
      </Container>

      <Container width="100%" title="Vencimento de solução">
        <div className="indicator-flex-container">
          <IndicatorBadge
            icon={Clock12Icon}
            type="Todos"
            valueIndicator={vencimentoSoluções.ALL}
            color="text-teal"
          />
          <IndicatorBadge
            icon={AlertTriangleIcon}
            type="Hoje"
            valueIndicator={vencimentoSoluções.TODAY}
            color="text-yellow"
          />
          <IndicatorBadge
            icon={AlertTriangleIcon}
            type="Amanhã"
            valueIndicator={vencimentoSoluções.TOMORROY}
            color="text-blue"
          />
          <IndicatorBadge
            icon={AlertTriangleIcon}
            type="Depois"
            valueIndicator={vencimentoSoluções.AFTER}
            color="text-cyan"
          />
        </div>
      </Container>
    </>
  );
};

export default ExpiredGroup;
