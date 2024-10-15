import { Button } from "@/components/ui/atoms/button";
import Container from "@/components/ui/organisms/container";
import { PlusIcon } from "lucide-react";
import React from "react";
import TableContats from "./TableContacts";

const ContactsInformations = () => {
  return (
    <Container
      width="100%"
      title="Contatos"
      rightContent={
        <>
          <Button variant="secondary" className="button-action">
            <PlusIcon size={18} /> Contatos
          </Button>
        </>
      }
    >
      <TableContats />
    </Container>
  );
};

export default ContactsInformations;
