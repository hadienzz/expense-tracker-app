import { useState } from "react";

const useFilterTransaction = () => {
  const [visibleCount, setVisibleCount] = useState(5);
  const [filterType, setFilterType] = useState("all");
  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 5);
  };

  return {
    visibleCount,
    filterType,
    setFilterType,
    handleLoadMore,
  };
};

export default useFilterTransaction;
