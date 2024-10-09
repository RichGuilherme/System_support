"use client";

import { Cross2Icon } from "@radix-ui/react-icons";

import { Button } from "@/components/ui/atoms/button";
import { Input } from "@/components/ui/atoms/input";

import { useState } from "react";
import { DataTableViewOptions } from "../dataTableViewOptions";
import { DataTableFacetedFilter } from "../dataTableFacetedFilter";
import { CalendarDatePicker } from "@/components/ui/molecules/DatePicket";
import { DataTableToolbarProps } from "../../@type";
import { TrashIcon } from "lucide-react";

export function DataTableToolbar<TData>({
  table,
  filters = [],
  columnDate,
  inputTextValue,
  showDatePicker = true,
}: DataTableToolbarProps<TData>) {
  const isFiltered = table.getState().columnFilters.length > 0;

  const [dateRange, setDateRange] = useState<{ from: Date; to: Date }>({
    from: new Date(new Date().getFullYear(), 0, 0),
    to: new Date(),
  });

  const handleDateSelect = ({ from, to }: { from: Date; to: Date }) => {
    setDateRange({ from, to });

    table.getColumn(`${columnDate}`)?.setFilterValue([from, to]);
  };

  return (
    <div className="flex flex-wrap items-end justify-between">
      <div className="flex flex-1 flex-wrap items-center gap-2">
        <Input
          placeholder={`Filtra ${table.getColumn(inputTextValue)?.columnDef.header}`}
          value={
            (table
              .getColumn(`${inputTextValue}`)
              ?.getFilterValue() as string) ?? ""
          }
          onChange={(event) => {
            table
              .getColumn(`${inputTextValue}`)
              ?.setFilterValue(event.target.value);
          }}
          className="h-8 w-[150px] lg:w-[250px]"
        />

        {filters.map(
          (filter) =>
            table.getColumn(filter.columnId) && (
              <DataTableFacetedFilter
                key={filter.columnId}
                column={table.getColumn(filter.columnId)}
                title={filter.title}
                options={filter.options}
              />
            ),
        )}

        {isFiltered && (
          <Button
            variant="ghost"
            onClick={() => table.resetColumnFilters()}
            className="h-8 px-2 lg:px-3"
          >
            Resetar
            <Cross2Icon className="ml-2 h-4 w-4" />
          </Button>
        )}

        {showDatePicker && (
          <CalendarDatePicker
            date={dateRange}
            onDateSelect={handleDateSelect}
            className="h-8 w-[250px]"
            variant="outline"
          />
        )}
      </div>

      <div className="flex items-center gap-2">
        {table.getFilteredSelectedRowModel().rows.length > 0 ? (
          <Button variant="outline" size="sm">
            <TrashIcon className="mr-2 size-4" aria-hidden="true" />
            Delete ({table.getFilteredSelectedRowModel().rows.length})
          </Button>
        ) : null}
        <DataTableViewOptions table={table} />
      </div>
    </div>
  );
}
