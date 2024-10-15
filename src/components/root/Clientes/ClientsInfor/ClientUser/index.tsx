import React from "react";
import ClientPortal from "./ClientPortal";
import ClientRequester from "./ClientRequester";
import ClientTicketsByEmail from "./ClientTicketsByEmail";

const ClientUser = () => {
  return (
    <div className="page-container">
      <ClientPortal />
      <ClientRequester />
      <ClientTicketsByEmail />
    </div>
  );
};

export default ClientUser;
