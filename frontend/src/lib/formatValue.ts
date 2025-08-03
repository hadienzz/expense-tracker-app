export const formatPrice = (value: number) => {
  if (value < 1000 || value < 0) return value.toString();

  if (value < 1_000_000 || value < -1_000_000) {
    const ribu = value / 1000;
    return (
      (Number.isInteger(ribu) ? ribu : ribu.toFixed(1).replace(".", ",")) + "k"
    );
  }

  if (value < 1_000_000_000 || value < 0) {
    const juta = value / 1_000_000;
    return (
      (Number.isInteger(juta) ? juta : juta.toFixed(1).replace(".", ",")) + "jt"
    );
  }

  if (value < 1_000_000_000_000 || value < 0) {
    const milyar = value / 1_000_000_000;
    return (
      (Number.isInteger(milyar)
        ? milyar
        : milyar.toFixed(1).replace(".", ",")) + " milyar"
    );
  }

  return value?.toString(); // fallback untuk >1Miliar
};
