import useSmartInsight from "@/hooks/useSmartInsight";
import { TabsContent } from "../../ui/tabs";

interface SummaryInsightProps {
  transactionData: any | [];
  isLoading: boolean;
}

const SummaryInsight = ({
  transactionData,
  isLoading,
}: SummaryInsightProps) => {
  const summaryData = useSmartInsight({ transactionData });

  return (
    <TabsContent value="insight">
      <section className="grid lg:grid-cols-2 place-items-center gap-4">
        {summaryData?.insight?.map((item: any, idx: number) => (
          <div key={idx} className={`${item.backgroundColor} p-4`}>
            <h1 className={`font-semibold mb-2 ${item.titleColor}`}>
              {item.title}
            </h1>
            <p className={`${item.textColor}`}>{item.sentence}</p>
          </div>
        ))}
      </section>
    </TabsContent>
  );
};

export default SummaryInsight;
