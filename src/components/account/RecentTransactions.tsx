import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowDownLeft, ArrowUpRight } from "lucide-react";

interface Transaction {
  id: number;
  title: string;
  date: string;
  amount: string;
  type: string;
}

interface RecentTransactionsProps {
  transactions: Transaction[];
}

export function RecentTransactions({ transactions }: RecentTransactionsProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Transactions</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {transactions.map((transaction) => (
            <div
              key={transaction.id}
              className="flex items-center justify-between"
            >
              <div className="flex items-center space-x-4">
                <div className="rounded-full bg-muted p-2">
                  {transaction.type === "Received" ? (
                    <ArrowDownLeft className="h-4 w-4" />
                  ) : (
                    <ArrowUpRight className="h-4 w-4" />
                  )}
                </div>
                <div>
                  <p className="text-sm font-medium">{transaction.title}</p>
                  <p className="text-xs text-muted-foreground">
                    {transaction.date}
                  </p>
                </div>
              </div>
              <div className="text-right">
                <p
                  className={`text-sm font-medium ${
                    transaction.type === "Received"
                      ? "text-green-500"
                      : "text-red-500"
                  }`}
                >
                  {transaction.amount}
                </p>
                <p className="text-xs text-muted-foreground">
                  {transaction.type}
                </p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
