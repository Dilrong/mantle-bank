"use client";

import { Card } from "@/components/ui/card";
import { Chart } from "@/components/ui/chart";
import { Info } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { useEffect, useState } from "react";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";

interface ChartData {
  date: string;
  value: number;
}

export function GrowthChart() {
  const [data, setData] = useState<ChartData[]>([]);
  const [totalGrowth, setTotalGrowth] = useState(23.5);
  const growthMotion = useMotionValue(totalGrowth);

  const displayGrowth = useTransform(growthMotion, (latest) => {
    return `+${latest.toFixed(1)}%`;
  });

  useEffect(() => {
    // Generate initial data
    const initialData = Array.from({ length: 7 }, (_, i) => ({
      date: `Jan ${i + 1}`,
      value: 1000 + i * 50,
    }));
    setData(initialData);

    // Simulate real-time updates
    const interval = setInterval(() => {
      setData((prev) => {
        const newData = [...prev];
        const lastValue = newData[newData.length - 1].value;
        const change = Math.random() * 20 - 10;
        newData.push({
          date: `Jan ${newData.length + 1}`,
          value: Math.max(0, lastValue + change),
        });
        if (newData.length > 7) {
          newData.shift();
        }
        return newData;
      });

      const newGrowth = totalGrowth + (Math.random() * 0.2 - 0.1);
      setTotalGrowth(newGrowth);
      animate(growthMotion, newGrowth, {
        type: "spring",
        stiffness: 50,
        damping: 20,
        duration: 1,
      });
    }, 3000);

    return () => clearInterval(interval);
  }, [totalGrowth, growthMotion]);

  return (
    <Card className="p-6 hover:shadow-lg transition-shadow duration-200">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold">Your Growth</h3>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger>
              <Info className="w-4 h-4 text-muted-foreground" />
            </TooltipTrigger>
            <TooltipContent>
              <p>Track your investment growth over time</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-muted-foreground">Total Growth</p>
            <motion.p className="text-2xl font-bold text-green-500">
              {displayGrowth}
            </motion.p>
          </div>
          <div>
            <p className="text-sm text-muted-foreground">Time Period</p>
            <p className="text-sm font-medium">Last 7 Days</p>
          </div>
        </div>
        <Chart data={data} />
      </div>
    </Card>
  );
}
