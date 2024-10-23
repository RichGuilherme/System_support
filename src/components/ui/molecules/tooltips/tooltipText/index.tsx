import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/atoms/tooltip";
import { tooltipTextProps } from "../../@type";

export function TooltipText({ content, text, ...props }: tooltipTextProps) {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild {...props}>
          <div className="flex flex-row gap-3">{text}</div>
        </TooltipTrigger>

        <TooltipContent>
          <p>{content}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
