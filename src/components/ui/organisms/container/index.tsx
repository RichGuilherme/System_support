import { ReactNode } from "react";

type gradientType =
  | "gradient_color-topLeft"
  | "gradient_color-meio"
  | "gradient_color-left";

type ContainerProps = {
  width: string;
  height: string;
  gradientColor?: gradientType;
  gridSpan?: string;
  title: string;
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
      className={`${gradientColor || "gradient_color-topLeft"} rounded-2xl px-4 py-5 shadow-md ${gridSpan}`}
      style={{ width: width, height: height }}
      {...props}
    >
      <div className="mb-4 flex items-start justify-between">
        <div className="flex flex-col justify-start">
          <p className="text-lg font-semibold">{title}</p>

          <div className="">{subTitle}</div>
        </div>

        {rightContent}
      </div>

      {children}
    </section>
  );
};

export default Container;
