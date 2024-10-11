import { Framer } from "@/components/layout/Frame";
import ClientsInfor from "@/components/root/Clientes/ClientsInfor";
import React from "react";

const ClientPageSlug = ({ params }: { params: { slug: string } }) => {
  const paramsValue = decodeURIComponent(params.slug);
  return (
    <Framer>
      <ClientsInfor paramsValue={paramsValue} />
    </Framer>
  );
};

export default ClientPageSlug;
