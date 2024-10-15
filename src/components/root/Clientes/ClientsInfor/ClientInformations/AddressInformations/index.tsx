"use client";

import { Button } from "@/components/ui/atoms/button";
import Container from "@/components/ui/organisms/container";
import { PlusIcon } from "lucide-react";
import TableAddress from "./TableAddress";

const AddressInformations = () => {
  return (
    <Container
      width="100%"
      title="Endereços"
      rightContent={
        <>
          <Button variant="secondary" className="button-action">
            <PlusIcon size={18} /> Endereço
          </Button>
        </>
      }
    >
      <TableAddress />
    </Container>
  );
};

export default AddressInformations;
