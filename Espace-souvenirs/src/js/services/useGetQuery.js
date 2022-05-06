import React from 'react';
import {
  useQuery,
} from 'react-query';
import axios from 'axios';

export default function useGetQuery({ 
  key,
  API,
  staleTime = 0,
  cacheTime = 0,
  refetchOnMount = false,
  refetchOnWindowFocus = false 
}) {

  const query = useQuery(key, async () => {
    try {
      const result = await axios.get(API);
      const data = await result?.data;
      return data;
    } catch (error) {
      // console.error(error);
      return error?.response?.status;
    }
  }, { staleTime, cacheTime, refetchOnMount, refetchOnWindowFocus });
  return query;
}
