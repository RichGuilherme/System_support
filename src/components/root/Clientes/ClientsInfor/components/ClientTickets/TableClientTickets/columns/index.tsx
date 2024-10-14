"use client";

import { DataTableRowActions } from "@/components/ui/molecules/dataTable/dataTableRowActions";
import { PatternFormat } from "react-number-format";
import { ColumnDef } from "@tanstack/react-table";
import { z } from "zod";

export const ContactsInforSchema = z.object({
  number: z.number(),
  title: z.string(),
  phase: z.string(),
  status: z.string(),
  table: z.string(),
  responsible: z.string(),
  applicant: z.string(),
  createdIn: z.string(),
  closedIn: z.string(),
});

export type ContactsInfor = z.infer<typeof ContactsInforSchema>;

export const columns: ColumnDef<ContactsInfor>[] = [
  {
    accessorKey: "number",
    header: "Número",
  },
  {
    accessorKey: "title",
    header: "Título",
  },
  {
    accessorKey: "phase",
    header: "Estagío",
    cell: ({ row }) => {
      const phone = row.getValue("phone");

      return (
        <div>
          <PatternFormat
            className="bg-transparent"
            displayType="text"
            format="+55 (##) ##### ####"
            value={phone as string}
          />
        </div>
      );
    },
  },
  {
    accessorKey: "typeContact",
    header: "Tipo de contato",
  },

  {
    id: "actions",
    cell: ({ row }) => <DataTableRowActions row={row} />,
  },
];
