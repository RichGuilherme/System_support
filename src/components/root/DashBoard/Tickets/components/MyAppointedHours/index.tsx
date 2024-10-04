import { Card, CardContent, CardHeader } from "@/components/ui/atoms/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/atoms/chart";
import IndicatorBadge from "@/components/ui/molecules/indicatorBadge";
import Container from "@/components/ui/organisms/container";
import dayjs from "dayjs";
import { CheckCircle } from "lucide-react";
import { Area, AreaChart, CartesianGrid, XAxis, YAxis } from "recharts";
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
    { day: days[3], today: 7200000, yesterday: 1800000 },
    { day: days[4], today: 1800000, yesterday: 3600000 },
    { day: days[5], today: 7200000, yesterday: 7200000 },
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
                color="text-cyan"
              />

              <IndicatorBadge
                icon={CheckCircle}
                type="Hoje"
                valueIndicator="00:00"
                color="text-yellow"
              />
            </div>
          </CardHeader>

          <CardContent>
            <ChartContainer config={chartConfig}>
              <AreaChart
                accessibilityLayer
                data={chartData}
                margin={{
                  top: 10,
                  left: 0,
                  right: 18,
                }}
              >
                <CartesianGrid
                  stroke="var(--border-100)"
                  vertical={false}
                  strokeDasharray="4 4"
                />
                <XAxis
                  dataKey="day"
                  axisLine={false}
                  tickLine={false}
                  tickMargin={9}
                />

                <YAxis
                  tickFormatter={formatTime}
                  axisLine={false}
                  tickLine={false}
                  tickMargin={9}
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

                <Area
                  dataKey="today"
                  type="natural"
                  stroke=""
                  fill="var(--chart-1)"
                  strokeWidth={2}
                  fillOpacity={0.4}
                  activeDot={{
                    r: 6,
                  }}
                />

                <Area
                  dataKey="yesterday"
                  type="natural"
                  stroke=""
                  fill="var(--chart-2)"
                  fillOpacity={0.4}
                  strokeWidth={2}
                  activeDot={{
                    r: 6,
                  }}
                />
              </AreaChart>
            </ChartContainer>
          </CardContent>
        </Card>
      </Container>
    </>
  );
};

export default MyAppointedHours;
