import BudgetForm from "@/components/BudgetForm";
import BudgetSummary from "@/components/BudgetSummary";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import TransactionList from "@/components/TransactionList";

export default function Home() {
  return (
    <div>
      <Header />
      <main>
        <BudgetForm />
        <BudgetSummary />
        <TransactionList />
      </main>
      <Footer />
    </div>
  );
}
