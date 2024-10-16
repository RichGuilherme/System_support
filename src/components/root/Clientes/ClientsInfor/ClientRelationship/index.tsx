import React from "react";
import RelationshipBoard from "./RelationshipBoard";
import BoardDefaultClient from "./BoardDefaultClient";
import GroupAttendants from "./GroupAttendants";

const ClientRelationship = () => {
  return (
    <div className="page-container">
      <RelationshipBoard />
      <BoardDefaultClient />
      <GroupAttendants />
    </div>
  );
};

export default ClientRelationship;
