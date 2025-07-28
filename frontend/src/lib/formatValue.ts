export const formatPrice = (value: number) => {
  if (value < 1000) return value.toString();

  if (value < 1_000_000) {
    return Math.floor(value / 1000) + "k";
  }

  if (value < 1_000_000_000) {
    const juta = value / 1_000_000;
    return (
      (Number.isInteger(juta) ? juta : juta.toFixed(1).replace(".", ",")) + "jt"
    );
  }

  return value.toString();
};
