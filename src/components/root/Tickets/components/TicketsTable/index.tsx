import { DataTable } from "@/components/ui/molecules/dataTable/";

import Container from "@/components/ui/organisms/container";

import { columns } from "./columns";
import { TicketsData } from "./data";
import Filter from "./filters";

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
