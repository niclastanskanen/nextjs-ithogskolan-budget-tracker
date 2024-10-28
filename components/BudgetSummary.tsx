import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { ArrowDown, ArrowUp, DollarSign } from "lucide-react";

interface Transaction {
  id: number;
  description: string;
  amount: number;
  type: "income" | "expense";
}

interface BudgetSummaryProps {
  transactions: Transaction[];
}

const BudgetSummary = ({ transactions }: BudgetSummaryProps) => {
  const income = transactions
    .filter((t) => t.type === "income")
    .reduce((sum, t) => sum + t.amount, 0);

  const expenses = transactions
    .filter((t) => t.type === "expense")
    .reduce((sum, t) => sum + t.amount, 0);

  const balance = income - expenses;

  return (
    <Card>
      <CardHeader>Summary</CardHeader>
      <CardContent className="space-y-4">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-1">
          <div className="flex items-center">
            <ArrowUp className="h-5 w-5 text-green-600 dark:text-green-400 mr-2" />
            <span>Income</span>
          </div>
          <span className="text-green-600 dark:text-green-400 font-semibold">
            ${income.toFixed(2)}
          </span>
        </div>
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-1">
          <div className="flex items-center">
            <ArrowDown className="h-5 w-5 text-red-600 dark:text-red-400 mr-2" />
            <span>Expenses</span>
          </div>
          <span className="text-red-600 dark:text-red-400 font-semibold">
            ${expenses.toFixed(2)}
          </span>
        </div>
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-1 pt-2 border-t">
          <div className="flex items-center">
            <DollarSign className="h-5 w-5 text-primary mr-2" />
            <span className="font-bold">Balance</span>
          </div>
          <span
            className={`font-bold ${
              balance >= 0
                ? "text-green-600 dark:text-green-400"
                : "text-red-600 dark:text-red-400"
            }`}
          >
            ${balance.toFixed(2)}
          </span>
        </div>
      </CardContent>
    </Card>
  );
};

export default BudgetSummary;
