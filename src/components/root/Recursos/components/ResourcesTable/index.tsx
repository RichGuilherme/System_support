import { DataTable } from "@/components/ui/molecules/dataTable";
import React from "react";
import { columns } from "./table/columns";
import { ResourcesData } from "./table/data/resourcesData";

const ResourcesTable = () => {
  return (
    <>
      <DataTable columns={columns} data={ResourcesData} inputValue="name" />
    </>
  );
};

export default ResourcesTable;
