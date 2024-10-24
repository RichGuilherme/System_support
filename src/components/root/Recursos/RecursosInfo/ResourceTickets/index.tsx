import { TableSimple } from "@/components/ui/molecules/tableSimples";
import Container from "@/components/ui/organisms/container";
import { columns } from "./table/columns";

const ResourceTickets = () => {
  return (
    <Container width="100%">
      <TableSimple columns={columns} data={[]} />
    </Container>
  );
};

export default ResourceTickets;
