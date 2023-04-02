import { useQuery } from "@tanstack/react-query";
import { API } from "@api";

const netSavingsQueryKey = ["useNetSavings"];

const useNetSavings = () => {
  return useQuery(netSavingsQueryKey, () => API.getSavings(), {
    select: (data) => data?.data?.savings,
  });
};

export { useNetSavings, netSavingsQueryKey };
