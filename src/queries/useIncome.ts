import { useQuery } from "@tanstack/react-query";
import { API } from "@api";

const incomeQueryKey = ["useIncome"];

const useIncome = () => {
  return useQuery(incomeQueryKey, () => API.income.getAllIncome(), {
    // @ts-expect-error Response is not typed
    select: (response) => response?.data,
  });
};

export { useIncome, incomeQueryKey };
