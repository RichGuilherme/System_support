import { Layout } from "@/components/layout";
import React from "react";

const LayoutPage = ({ children }: { children: React.ReactNode }) => {
  return <Layout>{children}</Layout>;
};

export default LayoutPage;
