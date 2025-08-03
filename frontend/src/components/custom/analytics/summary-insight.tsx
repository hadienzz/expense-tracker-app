import useSmartInsight from "@/hooks/useSmartInsight";
import { TabsContent } from "../../ui/tabs";

interface SummaryInsightProps {
  transactionData: any[];
  isLoading: boolean;
}

const SummaryInsight = ({
  transactionData,
  isLoading,
}: SummaryInsightProps) => {
  const summaryData = useSmartInsight({ transactionData });
  const insights = summaryData?.insight || [];

  const isMinimal = insights.length < 3;

  if (isLoading) {
    return (
      <TabsContent value="insight">
        <div className="text-center py-8">Loading insight...</div>
      </TabsContent>
    );
  }

  return (
    <TabsContent value="insight">
      <section
        className={`grid ${
          isMinimal ? "" : "grid-cols-2"
        } place-items-center gap-4`}
      >
        {insights.map((item: any, idx: number) => (
          <div
            key={idx}
            className={`p-4 ${isMinimal ? "" : item.backgroundColor} `}
          >
            <h1
              className={`font-semibold mb-2 ${
                !isMinimal ? item.titleColor : ""
              }`}
            >
              {isMinimal ? item : item.title}
            </h1>
            {!isMinimal && (
              <p className={`${item.textColor}`}>{item.sentence}</p>
            )}
          </div>
        ))}
      </section>
    </TabsContent>
  );
};

export default SummaryInsight;
