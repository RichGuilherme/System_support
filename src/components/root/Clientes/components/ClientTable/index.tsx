import { DataTable } from "@/components/ui/molecules/dataTable";

import { ClientsData } from "./table/data";
import Filter from "./table/filters";
import Columns from "./table/columns";

const ClientTable = () => {
  const filtersBar = Filter();

  const columns = Columns();
  return (
    <>
      <DataTable
        columns={columns}
        data={ClientsData}
        inputValue={"name"}
        filtersBar={filtersBar}
      />
    </>
  );
};

export default ClientTable;
