import { useQuery } from "@tanstack/react-query";
import { API } from "@api";

const glanceStatsQueryKey = ["useGlanceStats"];

const useGlanceStats = () => {
  return useQuery(glanceStatsQueryKey, () => API.getGlanceStats(), {
    select: (data) => data?.data,
  });
};

export { useGlanceStats, glanceStatsQueryKey };
