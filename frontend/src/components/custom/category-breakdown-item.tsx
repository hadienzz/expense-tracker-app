import { formatPrice } from "@/lib/formatValue";

interface CategoryBreakdownItemProps {
  category: string;
  total: number;
  backgroundColor: string;
  totalTransaction: number;
}

const CategoryBreakdownItem = ({
  category,
  total,
  backgroundColor,
  totalTransaction,
}: CategoryBreakdownItemProps) => {
  const percentageUsed = ((total / totalTransaction) * 100).toFixed(1);
  return (
    <div className="py-4 space-y-0 w-full">
      <div className="flex items-center gap-2">
        <div
          className="rounded-full w-4 h-4  "
          style={{
            backgroundColor,
          }}
        ></div>

        {/* Label dan nominal */}
        <div className="flex justify-between  w-full text-right ">
          <h1 className="text-sm">{category}</h1>
          <h1 className="text-sm font-medium">{percentageUsed}%</h1>
        </div>
      </div>
    </div>
  );
};

export default CategoryBreakdownItem;
