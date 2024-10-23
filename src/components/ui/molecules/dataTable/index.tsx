"use client";

import * as React from "react";
import {
  ColumnFiltersState,
  SortingState,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getFacetedRowModel,
  getFacetedUniqueValues,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/atoms/table";
import { DataTableProps } from "../@type";
import { DataTableToolbar } from "./dataTableToolbar";
import { DataTablePagination } from "./dataTablePagination";
import { DataTableColumnHeader } from "./DataTableColumnHeader";
import { formatReal } from "@/utils/formatReal";
import IconNotFound from "@/assets/IconNotFound";

export function DataTable<TData, TValue>({
  columns,
  data,
  filtersBar,
  columnDate,
  inputValue,
  showDatePicker = false,
  showTotalRow = false,
  totalFieldKey,
}: DataTableProps<TData, TValue>) {
  const [rowSelection, setRowSelection] = React.useState({});
  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({});
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    [],
  );
  const [sorting, setSorting] = React.useState<SortingState>([]);

  const totalValue = React.useMemo(() => {
    if (!totalFieldKey) return 0;
    return data.reduce((total, row) => {
      const value = row[totalFieldKey] as unknown as number;
      return total + (value || 0);
    }, 0);
  }, [data, totalFieldKey]);

  const table = useReactTable({
    data,
    columns,
    state: {
      sorting,
      columnVisibility,
      rowSelection,
      columnFilters,
    },
    enableRowSelection: true,
    onRowSelectionChange: setRowSelection,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    onColumnVisibilityChange: setColumnVisibility,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFacetedRowModel: getFacetedRowModel(),
    getFacetedUniqueValues: getFacetedUniqueValues(),
  });

  return (
    <div className="space-y-4 pb-16">
      <DataTableToolbar
        table={table}
        filters={filtersBar}
        columnDate={columnDate || ""}
        inputTextValue={inputValue}
        showDatePicker={showDatePicker}
      />

      <Table>
        <TableHeader>
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <TableHead key={header.id} colSpan={header.colSpan}>
                  {header.isPlaceholder ? null : (
                    <DataTableColumnHeader
                      column={header.column}
                      title={
                        typeof header.column.columnDef.header === "string"
                          ? header.column.columnDef.header
                          : ""
                      }
                    />
                  )}
                </TableHead>
              ))}
            </TableRow>
          ))}
        </TableHeader>

        <TableBody>
          {table.getRowModel().rows?.length ? (
            <>
              {table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext(),
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))}

              {showTotalRow && (
                <TableRow>
                  <TableCell
                    colSpan={columns.length - 1}
                    className="text-start font-bold"
                  >
                    Total
                  </TableCell>
                  <TableCell className="font-bold">
                    {formatReal(totalValue)}
                  </TableCell>
                </TableRow>
              )}
            </>
          ) : (
            <TableRow>
              <TableCell colSpan={columns.length} className="h-auto">
                <div className="flex w-full flex-col items-center justify-center text-2xl font-semibold text-textSimples-300">
                  <div className="h-[180px] w-[260px] opacity-70">
                    <IconNotFound />
                  </div>
                  Sem resultado
                </div>
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>

      <DataTablePagination table={table} />
    </div>
  );
}
