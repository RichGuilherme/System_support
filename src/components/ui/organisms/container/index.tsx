import { ReactNode } from "react";

type gradientType =
  | "gradient_color-topLeft"
  | "gradient_color-meio"
  | "gradient_color-left"
  | "gradient_color-right";

type ContainerProps = {
  width?: string;
  height?: string;
  gradientColor?: gradientType;
  gridSpan?: string;
  title?: string;
  subTitle?: ReactNode;
  rightContent?: ReactNode;
  children: ReactNode;
};

const Container = ({
  width,
  height,
  gradientColor,
  gridSpan,
  title,
  subTitle,
  rightContent,
  children,
  ...props
}: ContainerProps) => {
  return (
    <section
      className={`${gradientColor || "gradient_color-topLeft"} inline-flex flex-col space-y-3 rounded-2xl px-4 py-5 text-sm shadow-md ${gridSpan}`}
      style={{ width: width, height: height, ...props }}
      {...props}
    >
      <div className="flex items-start justify-between">
        <div className="flex flex-col justify-start">
          <p className="text-lg font-semibold">{title}</p>

          <div className="text-textSimples-300 text-sm font-medium">
            {subTitle}
          </div>
        </div>

        {rightContent}
      </div>

      {children}
    </section>
  );
};

export default Container;
