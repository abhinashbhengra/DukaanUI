import { OverviewSection } from "./OverviewSection.jsx";
import { TransactionSection } from "./TransactionSection.jsx";

export const Dashboard = () => {
  return (
    <>
      <div className="p-8 bg-[#fafafa]">
        <OverviewSection />
        <TransactionSection />
      </div>
    </>
  );
};
