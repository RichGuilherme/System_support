import React from "react";

const ClientPageSlug = ({ params }: { params: { slug: string } }) => {
  return <div>ClientPageSlug {decodeURIComponent(params.slug)}</div>;
};

export default ClientPageSlug;
