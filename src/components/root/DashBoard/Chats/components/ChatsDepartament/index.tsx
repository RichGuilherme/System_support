"use client";

import { DataTable } from "@/components/ui/molecules/dataTable/";
import { columns } from "./table/columns";

import Container from "@/components/ui/organisms/container";

import { data } from "./table/data/dataChatsDepartaments";
import { TooltipsIcon } from "@/components/ui/molecules/tooltips/tooltipIcon";

const ChatsDepartament = () => {
  return (
    <Container
      title="Chats por departamentos"
      rightContent={
        <TooltipsIcon content="Tabela com informações sobre os chats de cada departamento" />
      }
    >
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
