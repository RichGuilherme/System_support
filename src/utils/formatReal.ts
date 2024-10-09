export const formatReal = (value: unknown) => {
  const number = parseFloat(value as string);

  if (Number.isNaN(number)) return "";

  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(number);
};
