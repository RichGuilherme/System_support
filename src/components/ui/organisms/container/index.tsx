import { cn } from "@/lib/utils";
import { ContainerProps } from "../@type";

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
      className={cn(
        "inline-flex flex-col space-y-4 rounded-2xl px-4 pb-8 pt-5 text-sm shadow-md",
        gridSpan,
        gradientColor,
      )}
      style={{ width: width, height: height, ...props }}
      {...props}
    >
      <div className="flex items-start justify-between">
        <div className="flex flex-col justify-start">
          <p className="text-lg font-semibold">{title}</p>

          <div className="text-sm font-medium text-textSimples-300">
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
