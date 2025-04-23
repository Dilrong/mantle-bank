"use client";

import { AccountSummary } from "@/components/account/AccountSummary";
import { QuickTransfer } from "@/components/account/QuickTransfer";
import { RecentTransactions } from "@/components/account/RecentTransactions";

const mockTransactions = [
  {
    id: 1,
    title: "DeFi Interest",
    date: "2024.04.25",
    amount: "+$1,000.00",
    type: "Received",
  },
  {
    id: 2,
    title: "Grocery",
    date: "2025.03.25",
    amount: "-$120.00",
    type: "Send",
  },
  {
    id: 3,
    title: "Salary",
    date: "2025.04.25",
    amount: "+$3,000.00",
    type: "Received",
  },
];

export default function Account() {
  return (
    <div className="space-y-8 py-8">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold">My Account</h1>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <AccountSummary
          title="Total Assets"
          amount="$123,456.78"
          subtitle="+$1,234.56 (1.2%) from last days"
        />
        <AccountSummary
          title="Checking Account"
          amount="$45,678.90"
          subtitle="dilrong.eth"
        />
        <AccountSummary
          title="Investment Account"
          amount="$77,777.89"
          subtitle="0xCBdAcb9d814DF5D65850CD004D1B5298B6918728"
        />
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <QuickTransfer />
        <RecentTransactions transactions={mockTransactions} />
      </div>
    </div>
  );
}
