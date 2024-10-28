"use client";

import { useEffect, useState } from "react";

import BudgetForm from "@/components/BudgetForm";
import BudgetSummary from "@/components/BudgetSummary";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import TransactionList from "@/components/TransactionList";

interface Transaction {
  id: number;
  description: string;
  amount: number;
  type: "income" | "expense";
}

export default function Home() {
  const [transactions, setTransactions] = useState<Transaction[]>(() => {
    const savedTransactions = localStorage.getItem("transactions");
    return savedTransactions ? JSON.parse(savedTransactions) : [];
  });

  useEffect(() => {
    localStorage.setItem("transactions", JSON.stringify(transactions));
  }, [transactions]);

  const addTransaction = (transaction: Transaction) => {
    setTransactions((prevTransactions) => [...prevTransactions, transaction]);
  };

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Header />
      <main className="container flex-grow mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-8">
            <BudgetForm onAddTransaction={addTransaction} />
            <BudgetSummary transactions={transactions} />
          </div>
          <TransactionList transactions={transactions} />
        </div>
      </main>
      <Footer />
    </div>
  );
}
