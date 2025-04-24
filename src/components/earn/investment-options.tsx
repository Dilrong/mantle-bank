"use client";

import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Shield, TrendingUp } from "lucide-react";
import { InvestDialog } from "./invest-dialog";

export function InvestmentOptions() {
  return (
    <Tabs defaultValue="smart" className="space-y-4">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="smart" className="flex items-center gap-2">
          <Shield className="w-4 h-4" />
          Smart Savings
        </TabsTrigger>
        <TabsTrigger value="simple" className="flex items-center gap-2">
          <TrendingUp className="w-4 h-4" />
          Easy Savings
        </TabsTrigger>
      </TabsList>
      <TabsContent value="smart" className="space-y-4">
        <Card className="p-6 hover:shadow-lg transition-shadow duration-200">
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold mb-2">Smart Savings</h3>
              <p className="text-muted-foreground">
                Let our experts grow your money safely
              </p>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <span>Expected Earnings</span>
                <span className="font-medium text-green-500">
                  8-12% per year
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span>Minimum Deposit</span>
                <span className="font-medium">$100</span>
              </div>
              <div className="flex justify-between items-center">
                <span>Risk Level</span>
                <span className="font-medium text-yellow-500">Medium</span>
              </div>
            </div>
            <InvestDialog
              type="smart"
              title="Smart Savings"
              description="Let our experts manage your money for steady growth"
              minAmount={100}
              expectedReturn="8-12% per year"
            />
          </div>
        </Card>
      </TabsContent>
      <TabsContent value="simple" className="space-y-4">
        <Card className="p-6 hover:shadow-lg transition-shadow duration-200">
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold mb-2">Easy Savings</h3>
              <p className="text-muted-foreground">
                Earn rewards by keeping your money with us
              </p>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <span>Expected Earnings</span>
                <span className="font-medium text-green-500">
                  5-15% per year
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span>Minimum Deposit</span>
                <span className="font-medium">$50</span>
              </div>
              <div className="flex justify-between items-center">
                <span>Risk Level</span>
                <span className="font-medium text-green-500">Low</span>
              </div>
            </div>
            <InvestDialog
              type="simple"
              title="Easy Savings"
              description="Earn rewards by keeping your money with us"
              minAmount={50}
              expectedReturn="5-15% per year"
            />
          </div>
        </Card>
      </TabsContent>
    </Tabs>
  );
}
