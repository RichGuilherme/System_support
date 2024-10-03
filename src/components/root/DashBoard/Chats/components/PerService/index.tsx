"use client";

import { DataTable } from "@/components/ui/molecules/dataTable/";
import { columns } from "./columns";

import Container from "@/components/ui/organisms/container";

import { AttendantData } from "./data/dataAttendant";
import { TooltipsIcon } from "@/components/ui/molecules/tooltipIcon";

const PerService = () => {
  return (
    <Container
      title="Chats por atendimento"
      rightContent={
        <TooltipsIcon content="Tabela com informações sobre os chats por atendimento" />
      }
    >
      <DataTable
        data={AttendantData}
        columns={columns}
        inputValue={"name"}
        showDatePicker={false}
      />
    </Container>
  );
};

export default PerService;
