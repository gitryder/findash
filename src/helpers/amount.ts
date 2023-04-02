const getFormattedAmount = (amount: string | number) => {
  return `₹${amount?.toLocaleString()}`;
};

export { getFormattedAmount };
