import React from "react";

export const Framer = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-full h-full animate-frameComponents">{children}</div>
  );
};
