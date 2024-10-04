import { cn } from "@/lib/utils";
import { Badge } from "../../atoms/badge";
import { IndicatorBadgeProps } from "../@type";

const IndicatorBadge = ({
  icon,
  type,
  valueIndicator,
  color,
}: IndicatorBadgeProps) => {
  const IconComponent = icon;

  return (
    <div className="flex flex-col items-center gap-2">
      <p className="whitespace-nowrap font-light"> {type} </p>

      <Badge variant="ghost" className={cn("flex items-center gap-2", color)}>
        <IconComponent size={25} />
        <span className="text-2xl">{valueIndicator}</span>
      </Badge>
    </div>
  );
};

export default IndicatorBadge;
