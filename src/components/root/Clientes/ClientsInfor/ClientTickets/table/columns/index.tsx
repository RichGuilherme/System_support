import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/atoms/tooltip";
import { ColumnDef } from "@tanstack/react-table";
import { z } from "zod";

export const ClientTicketsSchema = z.object({
  number: z.number(),
  title: z.string(),
  phase: z.string(),
  status: z.string(),
  board: z.string(),
  responsible: z.string(),
  requester: z.string(),
  createdOn: z.string(),
  closedOn: z.string(),
});

export type ClientTickets = z.infer<typeof ClientTicketsSchema>;

export const columns: ColumnDef<ClientTickets>[] = [
  {
    accessorKey: "number",
    header: "Número",
    cell: ({ row }) => (
      <div>
        <span className="text-highlight-azul">{row.getValue("number")}</span>
      </div>
    ),
  },
  {
    accessorKey: "title",
    header: "Título",
    cell: ({ row }) => (
      <div className="max-w-[130px] truncate">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <span>{row.getValue("title")}</span>
            </TooltipTrigger>

            <TooltipContent>
              <p>{row.getValue("title")}</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
    ),
  },
  {
    accessorKey: "phase",
    header: "Estagío",
  },
  {
    accessorKey: "status",
    header: "Status",
  },
  {
    accessorKey: "board",
    header: "Mesa",
  },
  {
    accessorKey: "responsible",
    header: "Responsável",
  },
  {
    accessorKey: "requester",
    header: "Solicitante",
    cell: ({ row }) => (
      <div className="max-w-[118px] truncate">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <span>{row.getValue("requester")}</span>
            </TooltipTrigger>

            <TooltipContent>
              <p>{row.getValue("requester")}</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
    ),
  },
  {
    accessorKey: "createdOn",
    header: "Criado em",
  },
  {
    accessorKey: "closedOn",
    header: "Fechado em",
  },
];
