import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Trash2 } from "lucide-react";

const TransactionList = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Transactions</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex justify-between items-center p-3 bg-secondary rounded-lg">
          <div>
            <p className="font-medium">description</p>
            <p className="text-sm">amount</p>
          </div>
          <Button variant="ghost" size="icon">
            <Trash2 className="h-4 w-4" />
          </Button>
        </div>
        <p className="text-center text-muted-foreground">
          No transactions yet.
        </p>
      </CardContent>
    </Card>
  );
};

export default TransactionList;
