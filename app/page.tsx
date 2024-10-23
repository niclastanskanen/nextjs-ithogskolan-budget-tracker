import BudgetForm from "@/components/BudgetForm";
import BudgetSummary from "@/components/BudgetSummary";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import TransactionList from "@/components/TransactionList";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Header />
      <main className="container flex-grow mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-8">
            <BudgetForm />
            <BudgetSummary />
          </div>
          <TransactionList />
        </div>
      </main>
      <Footer />
    </div>
  );
}
