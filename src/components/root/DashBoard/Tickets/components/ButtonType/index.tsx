import { Button } from "@/components/ui/atoms/button";
import { LucideProps } from "lucide-react";
import { memo } from "react";

interface ButtonTypeProps {
  icon: React.ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>
  >;
  type: string;
  valueNumber: number;
  color:
    | "cyan-500"
    | "green-500"
    | "red-500"
    | "teal-800"
    | "yellow-500"
    | "blue-400"
    | "green-400";
}

const ButtonType = memo(
  ({ icon, type, valueNumber, color }: ButtonTypeProps) => {
    const IconComponent = icon;

    return (
      <Button className="flex flex-col gap-2">
        <p className="font-light"> {type} </p>

        <div className={`flex items-center gap-2 text-${color}`}>
          <IconComponent size={25} />
          <span className="text-2xl">{valueNumber}</span>
        </div>
      </Button>
    );
  },
);

export default ButtonType;
