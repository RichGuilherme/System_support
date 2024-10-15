import { TableSimple } from "@/components/ui/molecules/tableSimples";
import Container from "@/components/ui/organisms/container";
import { columns } from "./table/columns";

const TableResource = () => {
  return (
    <Container title="Recursos">
      <TableSimple columns={columns} data={[]} />
    </Container>
  );
};

export default TableResource;
