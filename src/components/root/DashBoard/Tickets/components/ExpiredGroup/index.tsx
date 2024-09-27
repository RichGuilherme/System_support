import {
  SERVICEDUEDATE,
  SERVICESOLUCTION,
} from "@/components/data/mockups/dashboard";
import IndicatorBadge from "@/components/ui/atoms/indicatorBadge";
import Container from "@/components/ui/organisms/container";
import { AlertTriangleIcon, Clock12Icon } from "lucide-react";

const ExpiredGroup = () => {
  const vencimentoAtendimentoData = SERVICEDUEDATE;
  const vencimentoSoluções = SERVICESOLUCTION;

  return (
    <>
      <Container
        width="100%"
        gradientColor="gradient_color-topLeft"
        title="Vencimento de atendimento"
      >
        <div className="indicator-flex-container">
          <IndicatorBadge
            icon={Clock12Icon}
            type="Todos"
            valueNumber={vencimentoAtendimentoData.ALL}
            color="text-teal-800"
          />
          <IndicatorBadge
            icon={AlertTriangleIcon}
            type="Hoje"
            valueNumber={vencimentoAtendimentoData.TODAY}
            color="text-yellow-500"
          />
          <IndicatorBadge
            icon={AlertTriangleIcon}
            type="Amanhã"
            valueNumber={vencimentoAtendimentoData.TOMORROW}
            color="text-blue-400"
          />
          <IndicatorBadge
            icon={AlertTriangleIcon}
            type="Depois"
            valueNumber={vencimentoAtendimentoData.AFTER}
            color="text-cyan-500"
          />
        </div>
      </Container>

      <Container
        width="100%"
        gradientColor="gradient_color-topLeft"
        title="Vencimento de solução"
      >
        <div className="indicator-flex-container">
          <IndicatorBadge
            icon={Clock12Icon}
            type="Todos"
            valueNumber={vencimentoSoluções.ALL}
            color="text-teal-800"
          />
          <IndicatorBadge
            icon={AlertTriangleIcon}
            type="Hoje"
            valueNumber={vencimentoSoluções.TODAY}
            color="text-yellow-500"
          />
          <IndicatorBadge
            icon={AlertTriangleIcon}
            type="Amanhã"
            valueNumber={vencimentoSoluções.TOMORROY}
            color="text-blue-400"
          />
          <IndicatorBadge
            icon={AlertTriangleIcon}
            type="Depois"
            valueNumber={vencimentoSoluções.AFTER}
            color="text-cyan-500"
          />
        </div>
      </Container>
    </>
  );
};

export default ExpiredGroup;
