// table

import { Column, ColumnDef, Row, Table } from "@tanstack/react-table";

export interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
  filtersBar: FilterOption[];
}

export interface DataTableColumnHeaderProps<TData, TValue>
  extends React.HTMLAttributes<HTMLDivElement> {
  column: Column<TData, TValue>;
  title: string;
}

export interface DataTableFacetedFilterProps<TData, TValue> {
  column?: Column<TData, TValue>;
  title?: string;
  options: {
    label: string;
    value: string;
    icon?: React.ComponentType<{ className?: string }>;
  }[];
}

export interface DataTablePaginationProps<TData> {
  table: Table<TData>;
}

export interface DataTableRowActionsProps<TData> {
  row: Row<TData>;
}

export interface FilterOption {
  title: string;
  columnId: string;
  options: { label: string; value: string }[];
}

export interface DataTableToolbarProps<TData> {
  table: Table<TData>;
  filters?: FilterOption[];
}

export interface DataTableViewOptionsProps<TData> {
  table: Table<TData>;
}
