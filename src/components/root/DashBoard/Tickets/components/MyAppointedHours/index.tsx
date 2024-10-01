import { Card, CardContent, CardHeader } from "@/components/ui/atoms/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/atoms/chart";
import IndicatorBadge from "@/components/ui/atoms/indicatorBadge";
import Container from "@/components/ui/organisms/container";
import dayjs from "dayjs";
import { CheckCircle } from "lucide-react";
import React from "react";
import { CartesianGrid, Line, LineChart, XAxis, YAxis } from "recharts";
import { ValueType } from "recharts/types/component/DefaultTooltipContent";

const formatTime = (milliseconds: ValueType) => {
  if (typeof milliseconds === "number") {
    const totalMinutes = Math.floor(milliseconds / 60000);
    const hours = String(Math.floor(totalMinutes / 60)).padStart(2, "0");
    const minutes = String(totalMinutes % 60).padStart(2, "0");
    return `${hours}:${minutes}`;
  }

  return "00:00";
};
const MyAppointedHours = () => {
  const days = Array.from({ length: 6 })
    .map((_, index) => {
      const day = dayjs().subtract(index, "day").format("DD/MM/YYYY");

      return day;
    })
    .reverse();

  const chartData = [
    { day: days[0], today: 1800000, yesterday: 1800000 },
    { day: days[1], today: 3600000, yesterday: 1800000 },
    { day: days[2], today: 1800000, yesterday: 7200000 },
    { day: days[3], today: 1800000, yesterday: 2400000 },
    { day: days[4], today: 1800000, yesterday: 3600000 },
    { day: days[5], today: 2400000, yesterday: 7200000 },
  ];

  const chartConfig = {
    today: {
      label: "Hoje",
      color: "var(--chart-1)",
    },
    yesterday: {
      label: "Ontem",
      color: "var(--chart-2)",
    },
  } satisfies ChartConfig;

  return (
    <>
      <Container
        height="auto"
        width="100%"
        style="max-h-[610px] overflow-auto"
        title="Minhas horas apontadas"
      >
        <Card>
          <CardHeader>
            <div className="indicator-flex-container px-24">
              <IndicatorBadge
                icon={CheckCircle}
                type="Ontem"
                valueIndicator="00:00"
                color="text-cyan-500"
              />

              <IndicatorBadge
                icon={CheckCircle}
                type="Hoje"
                valueIndicator="00:00"
                color="text-yellow-500"
              />
            </div>
          </CardHeader>

          <CardContent>
            <ChartContainer config={chartConfig}>
              <LineChart
                accessibilityLayer
                data={chartData}
                margin={{
                  top: 10,
                  left: 0,
                  right: 18,
                }}
              >
                <CartesianGrid vertical={false} strokeDasharray="5 5" />
                <XAxis
                  dataKey="day"
                  axisLine={false}
                  tickLine={false}
                  tickMargin={7}
                  padding={{ left: 38 }}
                />

                <YAxis
                  tickFormatter={formatTime}
                  axisLine={false}
                  tickLine={false}
                />

                <ChartTooltip
                  cursor={false}
                  content={<ChartTooltipContent indicator="line" />}
                  formatter={(value, name) => {
                    const formattedValue = formatTime(value);
                    const label = name === "today" ? "Hoje" : "Ontem";
                    return `${label}: ${formattedValue}`;
                  }}
                />

                <Line
                  dataKey="today"
                  type="monotone"
                  stroke="var(--chart-1)"
                  strokeWidth={2}
                  dot={{
                    fill: "var(--chart-1)",
                  }}
                  activeDot={{
                    r: 6,
                  }}
                />

                <Line
                  dataKey="yesterday"
                  type="natural"
                  stroke="var(--chart-2)"
                  strokeWidth={2}
                  dot={{
                    fill: "var(--chart-1)",
                  }}
                  activeDot={{
                    r: 6,
                  }}
                />
              </LineChart>
            </ChartContainer>
          </CardContent>
        </Card>
      </Container>
    </>
  );
};

export default MyAppointedHours;
