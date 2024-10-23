import { ModeToggle } from "./ModeToggle";

const Header = () => {
  return (
    <header className="bg-background border-b">
      <div className="container flex flex-row justify-between items-center mx-auto px-4 py-3 space-y-2">
        <h1 className="text-xl sm:text-2xl font-bold text-primary">
          Budget Tracker
        </h1>
        <ModeToggle />
      </div>
    </header>
  );
};

export default Header;
