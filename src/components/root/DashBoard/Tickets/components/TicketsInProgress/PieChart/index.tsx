import { Avatar } from "@/components/ui/atoms/avatar";
import { Button } from "@/components/ui/atoms/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/atoms/card";
import { ChartConfig } from "@/components/ui/atoms/chart";
import { AvatarImage } from "@radix-ui/react-avatar";
import { useEffect, useMemo, useState } from "react";
import jsonData from "@/components/data/mockups/pieChart.json";
import { cn } from "@/lib/utils";
import PieComponent from "./pie";

export type ChartData = {
  fill: string;
  user: string;
  byResponsible: number;
  byTable: number;
  byClient: number;
  ByTypeResources: number;
};

type UserData = {
  name: string;
  tickets: number;
  avatarUrl: string;
};

type MetricMap = {
  byResponsible: string;
  byTable: string;
  byClient: string;
  ByTypeResources: string;
};

const mapValues: MetricMap = {
  byResponsible: "Por responsabilidade",
  byTable: "Por mesa",
  byClient: "Por cliente",
  ByTypeResources: "Por tipo de recurso",
};

const PieChartComponent = () => {
  const [chartData, setChartData] = useState<ChartData[]>([]);
  const [userData, setUserData] = useState<UserData[]>([]);
  const [activeMetric, setActiveMetric] =
    useState<keyof MetricMap>("byResponsible");

  useEffect(() => {
    async function fetchData() {
      const data = jsonData;

      const updatedChartData: ChartData[] = data.chartData.map(
        (item, index) => ({
          ...item,
          fill: `var(--chart-${index + 1})`,
        }),
      );

      setChartData(updatedChartData);
      setUserData(data.userData);
    }

    fetchData();
  }, []);

  const chartConfig = useMemo(() => {
    return chartData.reduce<Record<string, { label: string; color: string }>>(
      (config, item) => {
        config[item.user] = {
          label: item.user,
          color: item.fill,
        };
        return config satisfies ChartConfig;
      },
      {},
    );
  }, [chartData]);

  return (
    <Card className="flex flex-col">
      <CardHeader className="">
        <div className="flex gap-x-7">
          {(
            ["byResponsible", "byTable", "byClient", "ByTypeResources"] as const
          ).map((value, index) => {
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
          })}
        </div>
      </CardHeader>

      <div className="mt-2 flex flex-row">
        <CardContent className="w-9/12 p-0">
          <PieComponent
            activeMetric={activeMetric}
            chartData={chartData}
            chartConfig={chartConfig}
          />
        </CardContent>

        <aside className="max-w-60 rounded-lg bg-background p-2 shadow-md">
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
