import { TableSimple } from "@/components/ui/molecules/tableSimples";
import Container from "@/components/ui/organisms/container";
import { CircleDollarSignIcon } from "lucide-react";
import { columns } from "./table/column";

const Financial = () => {
  return (
    <Container
      title={
        <>
          <CircleDollarSignIcon size={20} /> Financeiro
        </>
      }
    >
      <TableSimple columns={columns} data={[]} />
    </Container>
  );
};

export default Financial;
