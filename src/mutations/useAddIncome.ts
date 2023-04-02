import { useMutation, useQueryClient } from "@tanstack/react-query";

import { API } from "@api";
import { Income } from "@interfaces";

import { incomeQueryKey } from "@queries/useIncome";

const useAddIncome = () => {
  const queryClient = useQueryClient();
  return useMutation(
    (income: Income) => {
      return API.income.addIncome(income);
    },
    {
      onSuccess: () => {
        console.log("onSuccess");

        queryClient.invalidateQueries(incomeQueryKey);
      },
    }
  );
};

export { useAddIncome };
