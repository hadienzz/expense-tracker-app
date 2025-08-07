export const calculateProgress = (currentAmount: number, targetAmount: number) => {
  if (!targetAmount || targetAmount === 0) return 0; // Hindari Infinity
  const rawProgress = (currentAmount / targetAmount) * 100;
  return Math.min(rawProgress, 100); // Batasi maksimal 100%
};
