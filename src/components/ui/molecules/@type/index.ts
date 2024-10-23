// dataTable

import { Column, ColumnDef, Row, Table } from "@tanstack/react-table";
import { LucideProps } from "lucide-react";

export interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
  columnDate?: string;
  filtersBar?: FilterOption[];
  inputValue: string;
  showDatePicker?: boolean;
  showTotalRow?: boolean;
  totalFieldKey?: keyof TData;
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
  columnDate: string;
  inputTextValue: string;
  showDatePicker?: boolean;
}

export interface DataTableViewOptionsProps<TData> {
  table: Table<TData>;
}

// table

export interface TableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
}

// indicatorBadge

export interface IndicatorBadgeProps {
  icon: React.ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>
  >;
  type: string;
  valueIndicator: number | string;
  color:
  | "text-cyan"
  | "text-green-default"
  | "text-red"
  | "text-teal"
  | "text-yellow"
  | "text-blue"
  | "text-green-light"
  | "text-green-dark";
};

// tooltips
// icon
export type tooltipIconProps = {
  content: string;
}

export type tooltipTextProps = {
  content: string;
  text: React.ReactNode;
}
