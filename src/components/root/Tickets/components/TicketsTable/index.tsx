import { DataTable } from "@/components/ui/molecules/dataTable/";

import Container from "@/components/ui/organisms/container";

import { columns } from "./table/columns";
import { TicketsData } from "./table/data";
import Filter from "./table/filters";

const TicketsTable = () => {
  const filtersBar = Filter();

  return (
    <Container height="100%" width="100%" style="pt-0 flex-1">
      <DataTable
        columns={columns}
        data={TicketsData}
        inputValue="cliente"
        columnDate="criado_em"
        filtersBar={filtersBar}
      />
    </Container>
  );
};

export default TicketsTable;
