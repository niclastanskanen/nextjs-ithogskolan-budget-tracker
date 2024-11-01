"use client";

import { useEffect, useRef, useState } from "react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";

interface Transaction {
  id: number;
  description: string;
  amount: number;
  type: "income" | "expense";
}

interface BudgetFormProps {
  onAddTransaction: (transaction: Transaction) => void;
}

const BudgetForm = ({ onAddTransaction }: BudgetFormProps) => {
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");
  const [type, setType] = useState<"income" | "expense">("expense");

  const descriptionInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (descriptionInputRef.current) {
      descriptionInputRef.current.focus();
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!description || !amount || !type) return;

    const transaction: Transaction = {
      id: Date.now(),
      description,
      amount: parseFloat(amount),
      type,
    };
    onAddTransaction(transaction);
    setDescription("");
    setAmount("");
    setType("expense");
    if (descriptionInputRef.current) {
      descriptionInputRef.current.focus();
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Add Transaction</CardTitle>
      </CardHeader>
      <CardContent>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div className="space-y-2">
            <Label htmlFor="description">Description</Label>
            <Input
              id="description"
              type="text"
              placeholder="Enter description"
              required
              className="w-full"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              ref={descriptionInputRef}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="amount">Amount</Label>
            <Input
              id="amount"
              type="number"
              placeholder="0.00"
              step="0.01"
              min="0"
              required
              className="w-full"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="type">Type</Label>
            <Select
              value={type}
              onValueChange={(value: "income" | "expense") => setType(value)}
              required
            >
              <SelectTrigger id="type" className="w-full">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="income">Income</SelectItem>
                <SelectItem value="expense">Expense</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <Button type="submit" className="w-full">
            Add Transaction
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default BudgetForm;
