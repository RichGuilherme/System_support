import React from "react";

export const Framer = ({ children }: { children: React.ReactNode }) => {
  return <div className="h-auto animate-frameComponents">{children}</div>;
};
