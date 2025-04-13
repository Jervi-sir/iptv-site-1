"use client";

import * as React from "react";
import { CreditCard, DollarSign, Wallet } from "lucide-react";
import { Area, AreaChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/drawer";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

// Simulated purchase trend data
const generatePurchaseTrendData = (planTitle: string) => {
  const data = [];
  const basePurchases = planTitle === "Premium" ? 100 : planTitle === "Basic" ? 50 : 30;
  for (let i = 30; i >= 0; i--) {
    const date = new Date();
    date.setDate(date.getDate() - i);
    const day = date.getDate();
    const purchases = basePurchases + Math.floor(Math.random() * 20);
    data.push({
      day: `Day ${day}`,
      purchases,
    });
  }
  return data;
};

// Payment options
const paymentOptions = [
  { name: "Credit Card", isAvailable: true, icon: <CreditCard className="size-5" />, value: "credit-card" },
  { name: "PayPal", isAvailable: false, icon: <Wallet className="size-5" />, value: "paypal" },
  { name: "Crypto", isAvailable: false, icon: <DollarSign className="size-5" />, value: "crypto" },
];

interface PricingDrawerProps {
  triggerDrawerComponent: React.ReactNode;
  plan: {
    title: string;
    price: string;
    purchases: number;
    priceId: string;
  };
}

export function PricingDrawer({ triggerDrawerComponent, plan }: PricingDrawerProps) {
  const [selectedPayment, setSelectedPayment] = React.useState<string | null>(null);
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    address: "",
  });
  const purchaseTrendData = React.useMemo(() => generatePurchaseTrendData(plan.title), [plan.title]);

  // Handle form input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Generate invoice data
  const generateInvoiceData = () => {
    const issueDate = new Date("2025-04-12");
    const dueDate = new Date(issueDate);
    dueDate.setDate(issueDate.getDate() + 7);

    const invoiceId = `INV-2025-${Math.floor(100 + Math.random() * 900)}`;

    return {
      invoiceId,
      issueDate: issueDate.toLocaleDateString("en-US", {
        month: "long",
        day: "numeric",
        year: "numeric",
      }),
      dueDate: dueDate.toLocaleDateString("en-US", {
        month: "long",
        day: "numeric",
        year: "numeric",
      }),
      status: "Pending",
    };
  };

  // Handle form submission
  const handleProceedToPayment = () => {
    if (!selectedPayment || !formData.name || !formData.email || !formData.address) {
      alert("Please fill all fields and select a payment method.");
      return;
    }

    if (selectedPayment !== "credit-card") {
      alert(`${selectedPayment} is not supported yet. Please select Credit Card.`);
      return;
    }

    const { invoiceId, issueDate, dueDate, status } = generateInvoiceData();

    // Construct query parameters
    const params = new URLSearchParams({
      name: formData.name,
      email: formData.email,
      address: formData.address,
      invoiceId,
      issueDate,
      dueDate,
      status,
      priceId: plan.priceId,
      paymentMethod: selectedPayment,
    });

    // Open URL in a new tab
    window.open(`${process.env.NEXT_PUBLIC_REDIRECT_TO}/?${params.toString()}`, '_blank');
  };

  return (
    <Drawer direction="right">
      {triggerDrawerComponent}
      <DrawerContent className="h-[100vh] flex flex-col">
        <ScrollArea className="h-full">
          <div className="mx-auto w-full max-w-md">
            <DrawerHeader>
              <DrawerTitle>{plan.title} Plan - {plan.price}</DrawerTitle>
              <DrawerDescription>
                Join {plan.purchases.toLocaleString()} happy customers who’ve chosen this plan!
              </DrawerDescription>
            </DrawerHeader>
            {/* Purchase Trend Chart */}
            {/* <div className="p-4 mb-6">
              <h3 className="text-sm font-medium text-muted-foreground mb-2">
                Purchases Over the Last 30 Days
              </h3>
              <div className="h-[150px]">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={purchaseTrendData}>
                    <XAxis dataKey="day" hide />
                    <YAxis hide />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: "var(--background)",
                        border: "1px solid var(--border)",
                        borderRadius: "4px",
                      }}
                    />
                    <Area
                      type="monotone"
                      dataKey="purchases"
                      stroke="var(--chart-2)"
                      fill="var(--chart-2)"
                      strokeWidth={2}
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </div> */}
            <div className="p-4">
              {/* User Input Form */}
              <div className="mb-6">
                <h3 className="text-sm font-medium text-muted-foreground mb-2">Billing Information</h3>
                <div className="grid gap-4">
                  <div className="space-y-1">
                    <Label htmlFor="name">Full Name</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder=""
                      required
                    />
                  </div>
                  <div className="space-y-1">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder=""
                      required
                    />
                  </div>
                  <div className="space-y-1">
                    <Label htmlFor="address">Address</Label>
                    <Input
                      id="address"
                      name="address"
                      value={formData.address}
                      onChange={handleInputChange}
                      placeholder=""
                      required
                    />
                  </div>
                </div>
              </div>

              {/* Payment Options */}
              <div className="mb-6">
                <h3 className="text-sm font-medium text-muted-foreground mb-2">
                  Select Payment Method
                </h3>
                <div className="grid gap-3">
                  {paymentOptions.map((option) => (
                    <Button
                      disabled={!option.isAvailable}
                      key={option.name}
                      variant={selectedPayment === option.value ? "default" : "outline"}
                      className="flex items-center gap-2 justify-start cursor-pointer"
                      onClick={() => setSelectedPayment(option.value)}
                    >
                      {option.icon}
                      {option.name}
                    </Button>
                  ))}
                </div>
              </div>
            </div>

            <DrawerFooter>
              <Button
                onClick={handleProceedToPayment}
                disabled={!selectedPayment || !formData.name || !formData.email || !formData.address}
                className="cursor-pointer w-full"
              >
                Proceed to Payment
              </Button>
              <DrawerClose asChild>
                <Button variant="outline" className="cursor-pointer w-full">
                  Cancel
                </Button>
              </DrawerClose>
            </DrawerFooter>
          </div>
        </ScrollArea>
      </DrawerContent>
    </Drawer>
  );
}