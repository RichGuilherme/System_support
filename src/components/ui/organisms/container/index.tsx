import { cn } from "@/lib/utils";
import { ContainerProps } from "../@type";

const Container = ({
  width,
  height = "auto",
  gridSpan,
  title,
  subTitle,
  rightContent,
  children,
  style,
  ...props
}: ContainerProps) => {
  return (
    <section
      className={cn(
        "inline-flex flex-col space-y-4 rounded-2xl bg-backgroundSecondary px-4 pb-8 pt-5 text-sm shadow-md",
        gridSpan,
        style,
      )}
      style={{ width: width, height: height }}
      {...props}
    >
      <div
        className={cn(
          "flex justify-between",
          !!title === false && "justify-end",
        )}
      >
        {title ||
          (subTitle && (
            <div className="flex flex-col justify-start gap-y-1">
              <p className="flex flex-row items-center gap-2 text-base font-semibold">
                {title}
              </p>

              <div className="flex flex-row items-center gap-1 text-sm font-medium text-textSimples-300">
                {subTitle}
              </div>
            </div>
          ))}

        {rightContent}
      </div>

      {children}
    </section>
  );
};

export default Container;
