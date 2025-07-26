import { Wallet } from "lucide-react";

interface AuthHeaderProps {
  title: string;
  text: string;
}

const AuthHeader = ({ title, text }: AuthHeaderProps) => {
  return (
    <header>
      <div className="lg:hidden flex justify-center items-center gap-2 text-black ">
        <Wallet className="w-6 h-6" />
        <h1 className="text-2xl font-bold">Expense Tracker</h1>
      </div>
      <div className="text-center mb-8">
        <h2 className="text-2xl md:text-3xl font-bold text-foreground">
          {title}
        </h2>
        <p className="mt-2 text-sm md:text-base text-muted-foreground">
          {text}
        </p>
      </div>
    </header>
  );
};

export default AuthHeader;
