import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/atoms/chart";
import { memo, useState } from "react";
import { Label, Pie, PieChart, Sector } from "recharts";
import { PieSectorDataItem } from "recharts/types/polar/Pie";
import { ChartData } from "..";

interface PieComponentProps {
  activeMetric: string;
  chartData: ChartData[];
  chartConfig: ChartConfig;
}

const PieComponent = ({
  activeMetric,
  chartData,
  chartConfig,
}: PieComponentProps) => {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const onPieEnter = (_: unknown, index: number) => {
    setActiveIndex(index);
  };

  return (
    <ChartContainer
      config={chartConfig}
      className="mx-auto aspect-square w-full max-w-[390px]"
    >
      <PieChart>
        <ChartTooltip
          cursor={false}
          content={<ChartTooltipContent hideLabel />}
        />

        <Pie
          data={chartData}
          dataKey={activeMetric}
          nameKey="user"
          innerRadius={85}
          strokeWidth={5}
          isAnimationActive={false}
          activeIndex={activeIndex}
          onMouseEnter={onPieEnter}
          activeShape={({ outerRadius = 0, ...props }: PieSectorDataItem) => (
            <Sector
              {...props}
              outerRadius={outerRadius + 10}
              cursor="pointer"
            />
          )}
        >
          <Label
            content={({ viewBox }) => {
              if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                return (
                  <text
                    x={viewBox.cx}
                    y={viewBox.cy}
                    textAnchor="middle"
                    dominantBaseline="middle"
                  >
                    <tspan
                      x={viewBox.cx}
                      y={viewBox.cy}
                      className="fill-foreground text-3xl font-bold"
                    >
                      10
                    </tspan>
                    <tspan
                      x={viewBox.cx}
                      y={(viewBox.cy || 0) + 24}
                      className="fill-muted-foreground"
                    >
                      tickets
                    </tspan>
                  </text>
                );
              }
            }}
          />
        </Pie>
      </PieChart>
    </ChartContainer>
  );
};

PieComponent.displayName = "PieComponent";

export default memo(PieComponent);
