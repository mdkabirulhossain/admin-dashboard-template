// src/components/dashboard/orders-chart.tsx
"use client";

import { Line, LineChart, CartesianGrid, XAxis, YAxis } from "recharts";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { ShoppingCart } from "lucide-react";

const chartData = [
  { month: "Jan", orders: 110 },
  { month: "Feb", orders: 145 },
  { month: "Mar", orders: 130 },
  { month: "Apr", orders: 170 },
  { month: "May", orders: 155 },
  { month: "Jun", orders: 180 },
];

const chartConfig = {
  orders: {
    label: "Orders",
    color: "#d4a017",
  },
} satisfies ChartConfig;

export function OrdersChart() {
  return (
    <div className="dashboard-card flex flex-col">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-lg font-bold text-white">Orders Trend</h3>
          <p className="text-xs text-muted-foreground">Monthly order volume</p>
        </div>
        <ShoppingCart className="text-gold h-4 w-4" />
      </div>

      <ChartContainer config={chartConfig} className="min-h-[250px] w-full">
        <LineChart data={chartData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
          <CartesianGrid vertical={false} stroke="#1f1f23" strokeDasharray="3 3" />
          <XAxis
            dataKey="month"
            tickLine={false}
            axisLine={false}
            tickMargin={10}
            stroke="#71717a"
            fontSize={12}
          />
          <YAxis 
            tickLine={false} 
            axisLine={false} 
            stroke="#71717a" 
            fontSize={12} 
          />
          <ChartTooltip content={<ChartTooltipContent />} />
          <Line
            dataKey="orders"
            type="monotone"
            stroke="var(--color-gold)"
            strokeWidth={2}
            dot={{
              r: 4,
              fill: "var(--color-gold)",
              strokeWidth: 2,
              stroke: "#121214"
            }}
            activeDot={{
              r: 6,
              strokeWidth: 0
            }}
          />
        </LineChart>
      </ChartContainer>
    </div>
  );
}