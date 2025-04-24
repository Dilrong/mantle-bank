"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { History, ArrowRight } from "lucide-react";

export function ActivityHistory() {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold">Your Activity</h2>
        <Button variant="ghost" size="sm" className="text-muted-foreground">
          View All
          <ArrowRight className="w-4 h-4 ml-2" />
        </Button>
      </div>
      <Card className="p-6 hover:shadow-lg transition-shadow duration-200">
        <div className="text-center py-8">
          <History className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
          <p className="text-muted-foreground mb-2">No activity yet</p>
          <p className="text-sm text-muted-foreground">
            Start investing to see your activity history
          </p>
        </div>
      </Card>
    </div>
  );
}
