import { ReactNode } from "react";

export type gradientType =
  | "gradient_color-topLeft"
  | "gradient_color-meio"
  | "gradient_color-left"
  | "gradient_color-right";

export type ContainerProps = {
  width?: string;
  height?: string;
  gradientColor?: gradientType;
  gridSpan?: string;
  title?: string;
  subTitle?: ReactNode;
  rightContent?: ReactNode;
  children: ReactNode;
};