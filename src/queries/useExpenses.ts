import { useQuery } from "@tanstack/react-query";
import { API } from "@api";

const expensesQueryKey = ["useExpenses"];

const useExpenses = () => {
  return useQuery(expensesQueryKey, () => API.expenses.getAllExpenses(), {
    // @ts-expect-error Response is not typed
    select: (response) => response?.data,
  });
};

export { useExpenses, expensesQueryKey };
