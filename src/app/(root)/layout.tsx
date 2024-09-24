import { Layout } from "@/components/layout/Layout";
import React from "react";

const LayoutPage = ({ children }: { children: React.ReactNode }) => {
  return <Layout>{children}</Layout>;
};

export default LayoutPage;
