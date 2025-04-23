import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowUpRight, ArrowDownLeft } from "lucide-react";
import {
  motion,
  AnimatePresence,
  useMotionValue,
  useTransform,
  animate,
} from "framer-motion";
import { useEffect, useState } from "react";

interface AccountSummaryProps {
  title: string;
  amount: string;
  subtitle?: string;
}

type ChangeType = "increase" | "decrease";

export function AccountSummary({
  title,
  amount,
  subtitle,
}: AccountSummaryProps) {
  const [change, setChange] = useState<{
    value: number;
    type: ChangeType;
  } | null>(null);

  const [currentAmount, setCurrentAmount] = useState(
    parseFloat(amount.replace(/[^0-9.-]+/g, ""))
  );
  const motionValue = useMotionValue(currentAmount);

  const displayAmount = useTransform(motionValue, (latest) => {
    return `$${Math.round(latest).toLocaleString()}`;
  });

  useEffect(() => {
    const generateRandomChange = () => {
      const value = Math.floor(Math.random() * 1000);
      const type: ChangeType = Math.random() > 0.5 ? "increase" : "decrease";
      return { value, type };
    };

    const interval = setInterval(() => {
      const newChange = generateRandomChange();
      setChange(newChange);

      const newAmount =
        currentAmount +
        (newChange.type === "increase" ? newChange.value : -newChange.value);
      setCurrentAmount(newAmount);

      animate(motionValue, newAmount, {
        type: "spring",
        stiffness: 50,
        damping: 20,
        duration: 1,
      });
    }, 5000);

    return () => clearInterval(interval);
  }, [currentAmount, motionValue]);

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle>{title}</CardTitle>
        <AnimatePresence mode="wait">
          {change && (
            <motion.div
              key={change.value}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className={`flex items-center space-x-1 ${
                change.type === "increase" ? "text-green-500" : "text-red-500"
              }`}
            >
              {change.type === "increase" ? (
                <ArrowUpRight className="h-4 w-4" />
              ) : (
                <ArrowDownLeft className="h-4 w-4" />
              )}
              <span className="text-sm font-medium">
                {change.type === "increase" ? "+" : "-"}$
                {Math.abs(change.value)}
              </span>
            </motion.div>
          )}
        </AnimatePresence>
      </CardHeader>
      <CardContent>
        <motion.div className="text-2xl font-bold">{displayAmount}</motion.div>
        {subtitle && (
          <p className="text-xs text-muted-foreground">{subtitle}</p>
        )}
      </CardContent>
    </Card>
  );
}
