import axios from "axios";
import React from "react";
import { useQuery } from "react-query";

export default function useGetQuery({
  key,
  API,
  staleTime = 0,
  cacheTime = 0,
  refetchOnMount = false,
  refetchOnWindowFocus = false,
  enabled = true,
}) {
  const query = useQuery(
    key,
    async () => {
      try {
        const result = await axios.get(API);
        const data = await result?.data;
        return data;
      } catch (error) {
        return {
          error: true,
          status: error?.response?.status,
        };
        //return error?.response?.status;
      }
    },
    { staleTime, cacheTime, refetchOnMount, refetchOnWindowFocus, enabled },
  );
  return query;
}
