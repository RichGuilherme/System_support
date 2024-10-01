import { Avatar } from "@/components/ui/atoms/avatar";
import { Button } from "@/components/ui/atoms/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/atoms/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/atoms/chart";
import { AvatarImage } from "@radix-ui/react-avatar";
import { useEffect, useMemo, useState } from "react";
import { Label, Pie, PieChart } from "recharts";
import jsonData from "@/components/data/mockups/pieChart.json";
import { cn } from "@/lib/utils";

const mapValues = {
  byResponsible: "Por responsabilidade",
  byTable: "Por mesa",
  byClient: "Por cliente",
  ByTypeResources: "Por tipo de recurso",
};

const PieChartComponent = () => {
  const [chartData, setChartData] = useState([]);
  const [userData, setUserData] = useState([]);
  const [activeMetric, setActiveMetric] = useState("byResponsible");

  useEffect(() => {
    async function fetchData() {
      const data = jsonData;

      const updatedChartData = data.chartData.map((item, index) => ({
        ...item,
        fill: `var(--chart-${index + 1})`,
      }));

      setChartData(updatedChartData);
      setUserData(data.userData);
    }

    fetchData();
  }, []);

  const chartConfig = useMemo(() => {
    return chartData.reduce((config, item, index) => {
      config[item.user] = {
        label: item.user,
        color: `var(--chart-${index + 1})`,
      };
      return config satisfies ChartConfig;
    }, {});
  }, [chartData]);

  return (
    <Card className="flex flex-col">
      <CardHeader className="">
        <div className="flex gap-x-7">
          {["byResponsible", "byTable", "byClient", "ByTypeResources"].map(
            (value, index) => {
              return (
                <Button
                  variant="link"
                  key={index}
                  className={cn("text-textSimples-300", {
                    "font-semibold text-accent underline underline-offset-8":
                      value == activeMetric,
                  })}
                  onClick={() => setActiveMetric(value)}
                >
                  {mapValues[value]}
                </Button>
              );
            },
          )}
        </div>
      </CardHeader>

      <div className="mt-2 flex flex-row">
        <CardContent className="w-9/12 p-0">
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
                            {" "}
                            10{" "}
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
        </CardContent>

        <aside className="max-w-60 rounded-lg bg-accentNeutral p-2">
          <CardTitle className="border-b border-border-200 pb-3 text-lg">
            Resumo
          </CardTitle>

          <div className="mt-4 flex max-w-full flex-col items-center gap-4">
            {userData.map((user, index) => (
              <Button
                variant="default"
                key={index}
                className="flex w-full flex-row gap-x-3"
              >
                <Avatar>
                  <AvatarImage
                    className="h-10 w-10 rounded-full"
                    src={user.avatarUrl}
                    alt={user.name}
                  />
                </Avatar>

                <div className="w-full">
                  <p className="w-9/12 truncate text-base font-medium text-highlight-primary">
                    {user.name}
                  </p>
                  <span className="text-textSimples-300">
                    Tickets {user.tickets}
                  </span>
                </div>
              </Button>
            ))}
          </div>
        </aside>
      </div>
    </Card>
  );
};

export default PieChartComponent;
