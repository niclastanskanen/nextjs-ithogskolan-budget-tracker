import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Trash2 } from "lucide-react";

interface Transaction {
  id: number;
  description: string;
  amount: number;
  type: "income" | "expense";
}

interface TransactionListProps {
  transactions: Transaction[];
  onDeleteTransaction: (id: number) => void;
}

const TransactionList = ({
  transactions,
  onDeleteTransaction,
}: TransactionListProps) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Transactions</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {transactions.map(({ id, description, amount, type }) => (
          <div
            key={id}
            className="flex justify-between items-center p-3 bg-secondary rounded-lg"
          >
            <div>
              <p className="font-medium">{description}</p>
              <p
                className={`text-sm ${
                  type === "income"
                    ? "text-green-600 dark:text-green-400"
                    : "text-red-600 dark:text-red-400"
                }`}
              >
                {type === "income" ? "+" : "-"} ${amount.toFixed(2)}
              </p>
            </div>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => onDeleteTransaction(id)}
            >
              <Trash2 className="h-4 w-4" />
            </Button>
          </div>
        ))}
        {transactions.length === 0 && (
          <p className="text-center text-muted-foreground">
            No transactions yet.
          </p>
        )}
      </CardContent>
    </Card>
  );
};

export default TransactionList;
