"use client";

import { Card } from "@/components/ui/card";
import { ArrowUpRight, ArrowDownLeft } from "lucide-react";
import {
  motion,
  AnimatePresence,
  useMotionValue,
  useTransform,
  animate,
} from "framer-motion";
import { useEffect, useState } from "react";

interface SummaryData {
  balance: number;
  rewards: number;
  yearlyReturn: number;
  balanceChange: number;
  rewardsChange: number;
  returnChange: number;
}

export function SummarySection() {
  const [data, setData] = useState<SummaryData>({
    balance: 1234.56,
    rewards: 123.45,
    yearlyReturn: 12.5,
    balanceChange: 2.5,
    rewardsChange: 45.67,
    returnChange: 0.5,
  });

  const balanceMotion = useMotionValue(data.balance);
  const rewardsMotion = useMotionValue(data.rewards);
  const returnMotion = useMotionValue(data.yearlyReturn);

  const displayBalance = useTransform(balanceMotion, (latest) => {
    return `$${latest.toFixed(2)}`;
  });

  const displayRewards = useTransform(rewardsMotion, (latest) => {
    return `$${latest.toFixed(2)}`;
  });

  const displayReturn = useTransform(returnMotion, (latest) => {
    return `${latest.toFixed(1)}%`;
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const newData = {
        balance: data.balance + (Math.random() * 10 - 5),
        rewards: data.rewards + (Math.random() * 5 - 2),
        yearlyReturn: data.yearlyReturn + (Math.random() * 0.2 - 0.1),
        balanceChange: data.balanceChange + (Math.random() * 0.2 - 0.1),
        rewardsChange: data.rewardsChange + (Math.random() * 0.2 - 0.1),
        returnChange: data.returnChange + (Math.random() * 0.1 - 0.05),
      };
      setData(newData);

      animate(balanceMotion, newData.balance, {
        type: "spring",
        stiffness: 50,
        damping: 20,
        duration: 1,
      });

      animate(rewardsMotion, newData.rewards, {
        type: "spring",
        stiffness: 50,
        damping: 20,
        duration: 1,
      });

      animate(returnMotion, newData.yearlyReturn, {
        type: "spring",
        stiffness: 50,
        damping: 20,
        duration: 1,
      });
    }, 3000);

    return () => clearInterval(interval);
  }, [data, balanceMotion, rewardsMotion, returnMotion]);

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      <Card className="p-6 hover:shadow-lg transition-shadow duration-200">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-sm font-medium text-muted-foreground">
            Your Balance
          </h3>
          <AnimatePresence mode="wait">
            <motion.div
              key={data.balanceChange}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className={`flex items-center gap-1 ${
                data.balanceChange >= 0 ? "text-green-500" : "text-red-500"
              }`}
            >
              {data.balanceChange >= 0 ? (
                <ArrowUpRight className="w-4 h-4" />
              ) : (
                <ArrowDownLeft className="w-4 h-4" />
              )}
              <span className="text-sm">
                {data.balanceChange >= 0 ? "+" : ""}
                {data.balanceChange.toFixed(1)}%
              </span>
            </motion.div>
          </AnimatePresence>
        </div>
        <motion.p className="text-2xl font-bold">{displayBalance}</motion.p>
        <p className="text-sm text-muted-foreground mt-1">
          Total value of your investments
        </p>
      </Card>
      <Card className="p-6 hover:shadow-lg transition-shadow duration-200">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-sm font-medium text-muted-foreground">
            Total Rewards
          </h3>
          <AnimatePresence mode="wait">
            <motion.div
              key={data.rewardsChange}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className={`flex items-center gap-1 ${
                data.rewardsChange >= 0 ? "text-green-500" : "text-red-500"
              }`}
            >
              {data.rewardsChange >= 0 ? (
                <ArrowUpRight className="w-4 h-4" />
              ) : (
                <ArrowDownLeft className="w-4 h-4" />
              )}
              <span className="text-sm">
                {data.rewardsChange >= 0 ? "+" : ""}$
                {data.rewardsChange.toFixed(2)}
              </span>
            </motion.div>
          </AnimatePresence>
        </div>
        <motion.p className="text-2xl font-bold">{displayRewards}</motion.p>
        <p className="text-sm text-muted-foreground mt-1">
          Earned from staking and rewards
        </p>
      </Card>
      <Card className="p-6 hover:shadow-lg transition-shadow duration-200">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-sm font-medium text-muted-foreground">
            Yearly Return
          </h3>
          <AnimatePresence mode="wait">
            <motion.div
              key={data.returnChange}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className={`flex items-center gap-1 ${
                data.returnChange >= 0 ? "text-green-500" : "text-red-500"
              }`}
            >
              {data.returnChange >= 0 ? (
                <ArrowUpRight className="w-4 h-4" />
              ) : (
                <ArrowDownLeft className="w-4 h-4" />
              )}
              <span className="text-sm">
                {data.returnChange >= 0 ? "+" : ""}
                {data.returnChange.toFixed(1)}%
              </span>
            </motion.div>
          </AnimatePresence>
        </div>
        <motion.p className="text-2xl font-bold">{displayReturn}</motion.p>
        <p className="text-sm text-muted-foreground mt-1">
          Average annual return rate
        </p>
      </Card>
    </div>
  );
}
