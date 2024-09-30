import { cn } from "@/lib/utils";
import { LucideProps } from "lucide-react";
import { Badge } from "./badge";

type IndicatorBadgeProps = {
  icon: React.ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>
  >;
  type: string;
  valueIndicator: number | string;
  color:
    | "text-cyan-500"
    | "text-green-500"
    | "text-red-500"
    | "text-teal-800"
    | "text-yellow-500"
    | "text-blue-400"
    | "text-green-400";
};

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
