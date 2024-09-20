import { ThemeProvider } from "@/components/ThemeProvider";
import { Be_Vietnam_Pro } from "next/font/google";
import React from "react";

const BeVietnamProp = Be_Vietnam_Pro({
  subsets: ["latin"],
  display: "swap",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900", "100", "200", "300", "400", "500", "600", "700", "800", "900"]
});

export const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <body className={`${BeVietnamProp.className} antialiased`}>
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        {children}
      </ThemeProvider>
    </body>
  );
};
