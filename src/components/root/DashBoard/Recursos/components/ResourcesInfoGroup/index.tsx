import IndicatorBadge from "@/components/ui/molecules/indicatorBadge";
import Container from "@/components/ui/organisms/container";
import { ComputerIcon } from "lucide-react";

const ResourcesInfoGroup = () => {
  return (
    <div className="flex">
      <Container title="Recursos" width="100%">
        <div className="indicator-flex-container px-40">
          <IndicatorBadge
            icon={ComputerIcon}
            type="Todos"
            valueIndicator={1456}
            color={"text-teal-800"}
          />

          <IndicatorBadge
            icon={ComputerIcon}
            type="Online"
            valueIndicator={754}
            color={"text-green-500"}
          />

          <IndicatorBadge
            icon={ComputerIcon}
            type="Offline"
            valueIndicator={411}
            color={"text-yellow-500"}
          />
        </div>
      </Container>
    </div>
  );
};

export default ResourcesInfoGroup;
