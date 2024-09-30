import IndicatorBadge from "@/components/ui/atoms/indicatorBadge";
import Container from "@/components/ui/organisms/container";
import {
  CalendarIcon,
  CalendarMinus2Icon,
  CalendarRangeIcon,
} from "lucide-react";

const CommitmentsGroup = () => {
  return (
    <div className="flex flex-row gap-x-4">
      <Container
        height="165px"
        width="100%"
        gradientColor="gradient_color-left"
        title="Meus compromissos"
      >
        <div className="indicator-flex-container px-2">
          <IndicatorBadge
            icon={CalendarIcon}
            type="Todos"
            valueIndicator={0}
            color="text-teal-800"
          />
          <IndicatorBadge
            icon={CalendarMinus2Icon}
            type="Hoje"
            valueIndicator={0}
            color="text-yellow-500"
          />
          <IndicatorBadge
            icon={CalendarRangeIcon}
            type="Semana"
            valueIndicator={0}
            color="text-blue-400"
          />
          <IndicatorBadge
            icon={CalendarRangeIcon}
            type="mês"
            valueIndicator={0}
            color="text-cyan-500"
          />
        </div>
      </Container>

      <Container
        height="165px"
        width="100%"
        gradientColor="gradient_color-right"
        title="Todos compromissos"
      >
        <div className="indicator-flex-container px-2">
          <IndicatorBadge
            icon={CalendarIcon}
            type="Todos"
            valueIndicator={0}
            color="text-teal-800"
          />
          <IndicatorBadge
            icon={CalendarMinus2Icon}
            type="Hoje"
            valueIndicator={0}
            color="text-yellow-500"
          />
          <IndicatorBadge
            icon={CalendarRangeIcon}
            type="Semana"
            valueIndicator={0}
            color="text-blue-400"
          />
          <IndicatorBadge
            icon={CalendarRangeIcon}
            type="mês"
            valueIndicator={0}
            color="text-cyan-500"
          />
        </div>
      </Container>
    </div>
  );
};

export default CommitmentsGroup;
