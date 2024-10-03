import IndicatorBadge from "@/components/ui/molecules/indicatorBadge";
import { MessageSquareTextIcon, UserCircleIcon } from "lucide-react";
import { summaryData } from "../columns";

interface StatusInfoGroupProps {
  data: summaryData;
}

const StatusInfoGroup = ({ data }: StatusInfoGroupProps) => {
  return (
    <div className="indicator-flex-container h-20 justify-start gap-12 overflow-auto px-10">
      <div className="flex w-2/5 justify-between">
        <IndicatorBadge
          icon={MessageSquareTextIcon}
          type="Todos"
          valueIndicator={data.totalChats}
          color="text-blue-400"
        />
        <IndicatorBadge
          icon={UserCircleIcon}
          type="Online"
          valueIndicator={data.onlineCount}
          color="text-green-500"
        />
        <IndicatorBadge
          icon={UserCircleIcon}
          type="Offline"
          valueIndicator={data.offlineCount}
          color="text-red-500"
        />
      </div>
    </div>
  );
};

export default StatusInfoGroup;
