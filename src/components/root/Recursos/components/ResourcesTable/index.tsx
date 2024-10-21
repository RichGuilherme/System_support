import { DataTable } from "@/components/ui/molecules/dataTable";
import React from "react";

import { ResourcesData } from "./table/data/resourcesData";
import Columns from "./table/columns";

const ResourcesTable = () => {
  const columns = Columns();

  return (
    <>
      <DataTable columns={columns} data={ResourcesData} inputValue="name" />
    </>
  );
};

export default ResourcesTable;
