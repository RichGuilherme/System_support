import { ColumnDef } from "@tanstack/react-table";
import { z } from "zod";

export const TriggersFiredSchema = z.object({
  metric: z.string(),
  resource: z.string(),
  dateFired: z.string(),
  value: z.string(),
});

export type triggersFired = z.infer<typeof TriggersFiredSchema>;

export const columns: ColumnDef<triggersFired>[] = [
  {
    accessorKey: "metric",
    header: "Métrica",
  },
  {
    accessorKey: "resource",
    header: "Recursos",
  },
  {
    accessorKey: "dateFired",
    header: "Data do disparo",
  },
  {
    accessorKey: "value",
    header: "Valor",
  },
];
