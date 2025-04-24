"use client";

import { SummarySection } from "@/components/earn/summary-section";
import { GrowthChart } from "@/components/earn/growth-chart";
import { InvestmentOptions } from "@/components/earn/investment-options";
import { ActivityHistory } from "@/components/earn/activity-history";

export default function Earn() {
  return (
    <div className="space-y-8 py-8">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold">Earn</h1>
      </div>

      <SummarySection />
      <GrowthChart />
      <InvestmentOptions />
      <ActivityHistory />
    </div>
  );
}
