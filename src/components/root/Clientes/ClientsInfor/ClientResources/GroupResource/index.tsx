import { Button } from "@/components/ui/atoms/button";
import { TableSimple } from "@/components/ui/molecules/tableSimples";
import Container from "@/components/ui/organisms/container";
import { PlusIcon } from "lucide-react";
import React from "react";

const GroupResource = () => {
  return (
    <Container
      title="Grupo de recursos"
      rightContent={
        <>
          <Button variant="secondary" className="button-action">
            <PlusIcon size={18} />
            Grupo de recursos
          </Button>
        </>
      }
    >
      <TableSimple columns={[]} data={[]} />
    </Container>
  );
};

export default GroupResource;
