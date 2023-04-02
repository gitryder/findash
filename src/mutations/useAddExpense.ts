import { useMutation, useQueryClient } from "@tanstack/react-query";

import { API } from "@api";
import { Expense } from "@interfaces";

import { expensesQueryKey } from "@queries/useExpenses";

const useAddExpense = () => {
  const queryClient = useQueryClient();
  return useMutation(
    (expense: Expense) => {
      return API.expenses.addExpense(expense);
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries(expensesQueryKey);
      },
    }
  );
};

export { useAddExpense };
