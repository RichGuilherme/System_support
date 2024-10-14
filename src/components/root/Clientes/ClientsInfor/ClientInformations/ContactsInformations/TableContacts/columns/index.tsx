"use client";

import { DataTableRowActions } from "@/components/ui/molecules/dataTable/dataTableRowActions";
import { PatternFormat } from "react-number-format";
import { ColumnDef } from "@tanstack/react-table";
import { z } from "zod";

export const ContactsInforSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  phone: z.string(),
  typeContact: z.string(),
});

export type ContactsInfor = z.infer<typeof ContactsInforSchema>;

export const columns: ColumnDef<ContactsInfor>[] = [
  {
    accessorKey: "name",
    header: "Nome",
  },
  {
    accessorKey: "email",
    header: "Email",
  },
  {
    accessorKey: "phone",
    header: "Telefone",
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
