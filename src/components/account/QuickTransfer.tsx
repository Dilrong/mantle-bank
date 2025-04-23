import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowUpRight, ArrowDownLeft, Copy } from "lucide-react";
import { QRCodeSVG } from "qrcode.react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { toast } from "sonner";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useEffect, useState } from "react";

export function QuickTransfer() {
  const walletAddress = "0xCBdAcb9d814DF5D65850CD004D1B5298B6918728";
  const [btcPrice, setBtcPrice] = useState<number | null>(null);
  const [usdAmount, setUsdAmount] = useState<string>("");
  const [btcAmount, setBtcAmount] = useState<string>("");

  useEffect(() => {
    const fetchBtcPrice = async () => {
      try {
        const response = await fetch(
          "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd"
        );
        const data = await response.json();
        setBtcPrice(data.bitcoin.usd);
      } catch (error) {
        toast.error("Failed to fetch Bitcoin price");
        console.error(error);
      }
    };

    fetchBtcPrice();
    const interval = setInterval(fetchBtcPrice, 60000); // 1분마다 가격 업데이트

    return () => clearInterval(interval);
  }, []);

  const handleUsdChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setUsdAmount(value);

    if (btcPrice && value) {
      const btc = parseFloat(value) / btcPrice;
      setBtcAmount(btc.toFixed(8));
    } else {
      setBtcAmount("");
    }
  };

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(walletAddress);
      toast.success("Your address has been copied");
    } catch {
      toast.error("Failed to copy");
    }
  };

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);
    const address = formData.get("address") as string;
    const amount = formData.get("amount") as string;

    // TODO: 실제 송금 로직 구현
    toast.success(`Sending ${amount} to ${address}`);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Transfer</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="items-center space-y-4">
          <Dialog>
            <DialogTrigger asChild>
              <Button className="w-full" variant="outline">
                <ArrowUpRight className="mr-2 h-4 w-4" />
                Send Money
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md">
              <DialogHeader>
                <DialogTitle>Send Money</DialogTitle>
              </DialogHeader>
              <form onSubmit={handleSend} className="space-y-4 py-4">
                <div className="space-y-2">
                  <Label htmlFor="address">Recipient Address</Label>
                  <Input
                    id="address"
                    name="address"
                    placeholder="0x..."
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="amount">Amount (USD)</Label>
                  <Input
                    id="amount"
                    name="amount"
                    type="number"
                    step="0.01"
                    placeholder="0.00"
                    value={usdAmount}
                    onChange={handleUsdChange}
                    required
                  />
                  {btcAmount && (
                    <p className="text-sm text-muted-foreground">
                      ≈ {btcAmount} BTC
                    </p>
                  )}
                </div>
                <Button type="submit" className="w-full">
                  Send
                </Button>
              </form>
            </DialogContent>
          </Dialog>
          <Dialog>
            <DialogTrigger asChild>
              <Button className="w-full" variant="outline">
                <ArrowDownLeft className="mr-2 h-4 w-4" />
                Receive Money
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md">
              <DialogHeader>
                <DialogTitle>Receive Money</DialogTitle>
              </DialogHeader>
              <div className="flex flex-col items-center space-y-4 py-4">
                <div className="rounded-lg border p-4">
                  <QRCodeSVG value={walletAddress} size={200} />
                </div>
                <div className="flex w-full items-center space-x-2">
                  <div className="flex-1 truncate rounded-md border p-2 text-sm">
                    {walletAddress}
                  </div>
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={handleCopy}
                    className="shrink-0"
                  >
                    <Copy className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </CardContent>
    </Card>
  );
}
