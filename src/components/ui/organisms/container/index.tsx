import React from "react";

type gradientType =
  | "gradient_color-topLeft"
  | "gradient_color-meio"
  | "gradient_color-left";

type ContainerProps = {
  width: string;
  height: string;
  gradientColor?: gradientType;
  gridSpan?: string;
  children: React.ReactNode;
};

const Container = ({
  width,
  height,
  gradientColor,
  gridSpan,
  children,
  ...props
}: ContainerProps) => {
  return (
    <section
      className={`${gradientColor || "gradient_color-topLeft"} rounded-2xl px-3 py-5 shadow-md ${gridSpan}`}
      style={{ width: width, height: height }}
      {...props}
    >
      {children}
    </section>
  );
};

export default Container;
