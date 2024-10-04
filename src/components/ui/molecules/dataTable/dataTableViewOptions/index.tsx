"use client";

import { MixerHorizontalIcon } from "@radix-ui/react-icons";

import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/atoms/dropdown-menu";
import { Button } from "@/components/ui/atoms/button";
import { DataTableViewOptionsProps } from "../../@type";

export function DataTableViewOptions<TData>({
  table,
}: DataTableViewOptionsProps<TData>) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          size="sm"
          className="hidden h-7 items-center lg:flex"
        >
          <MixerHorizontalIcon className="icon" />
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent align="end" className="w-auto px-2">
        <DropdownMenuLabel>Alterar colunas</DropdownMenuLabel>

        <DropdownMenuSeparator />
        {table
          .getAllColumns()
          .filter(
            (column) =>
              typeof column.accessorFn !== "undefined" && column.getCanHide(),
          )
          .map((column) => {
            return (
              <DropdownMenuCheckboxItem
                key={column.id}
                className="capitalize"
                checked={column.getIsVisible()}
                onCheckedChange={(value: boolean) =>
                  column.toggleVisibility(!!value)
                }
              >
                {column.columnDef.header?.toString()}
              </DropdownMenuCheckboxItem>
            );
          })}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
