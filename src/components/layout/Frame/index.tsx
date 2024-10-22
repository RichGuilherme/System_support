import React from "react";

export const Framer = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-auto w-full animate-frameComponents">{children}</div>
  );
};
