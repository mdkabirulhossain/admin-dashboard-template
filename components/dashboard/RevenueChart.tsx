// src/components/dashboard/revenue-chart.tsx
"use client";

import { Area, AreaChart, CartesianGrid, XAxis, YAxis } from "recharts";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { TrendingUp } from "lucide-react";

const chartData = [
  { month: "Jan", revenue: 42000 },
  { month: "Feb", revenue: 51000 },
  { month: "Mar", revenue: 47000 },
  { month: "Apr", revenue: 61000 },
  { month: "May", revenue: 58000 },
  { month: "Jun", revenue: 67250 },
];

const chartConfig = {
  revenue: {
    label: "Revenue",
    color: "#d4a017",
  },
} satisfies ChartConfig;

export function RevenueChart() {
  return (
    <div className="dashboard-card flex flex-col">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-lg font-bold text-white">Revenue Overview</h3>
          <p className="text-xs text-muted-foreground">Last 6 months performance</p>
        </div>
        <TrendingUp className="text-gold h-4 w-4" />
      </div>

      <ChartContainer config={chartConfig} className="min-h-62.5 w-full">
        <AreaChart data={chartData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
          <defs>
            <linearGradient id="fillRevenue" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="var(--color-gold)" stopOpacity={0.3} />
              <stop offset="95%" stopColor="var(--color-gold)" stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid vertical={false} stroke="#1f1f23" strokeDasharray="3 3" />
          <XAxis
            dataKey="month"
            tickLine={false}
            axisLine={false}
            tickMargin={10}
            tickFormatter={(value) => value.slice(0, 3)}
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
          <Area
            dataKey="revenue"
            type="monotone"
            stroke="var(--color-gold)"
            strokeWidth={2}
            fillOpacity={1}
            fill="url(#fillRevenue)"
          />
        </AreaChart>
      </ChartContainer>
    </div>
  );
}