import { Button } from "@/components/ui/atoms/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/atoms/tooltip";
import { tooltipProps } from "../@type";
import { CircleAlertIcon } from "lucide-react";

export function TooltipsIcon({ content }: tooltipProps) {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="default">
            <CircleAlertIcon className="text-textSimples-300" />
          </Button>
        </TooltipTrigger>

        <TooltipContent>
          <p>{content}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
