"use client";

import { DataTable } from "@/components/ui/molecules/dataTable/";
import { columns } from "./columns";

import Container from "@/components/ui/organisms/container";

import { data } from "./data/dataChatsDepartaments";

const ChatsDepartament = () => {
  return (
    <Container title="Chats por departamentos">
      <DataTable
        data={data}
        columns={columns}
        inputValue={"departamento"}
        showDatePicker={false}
      />
    </Container>
  );
};

export default ChatsDepartament;
