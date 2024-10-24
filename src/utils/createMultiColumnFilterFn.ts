import { FilterFn } from "@tanstack/react-table";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const createMultiColumnFilterFn = (fields: string[]): FilterFn<any> => {
  return (row, columnId, filterValue) => {
    const searchableRowContent = fields
      .map(field => row.getValue(field))
      .join(" ");

    return searchableRowContent.toLowerCase().includes(filterValue.toLowerCase());
  };
};