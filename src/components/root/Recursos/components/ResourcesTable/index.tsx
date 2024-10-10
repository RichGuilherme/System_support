import { DataTable } from "@/components/ui/molecules/dataTable";
import React from "react";
import { columns } from "./columns";
import { ResourcesData } from "./data/resourcesData";

const ResourcesTable = () => {
  return (
    <>
      <DataTable columns={columns} data={ResourcesData} inputValue="name" />
    </>
  );
};

export default ResourcesTable;
