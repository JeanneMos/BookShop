import axios from "axios";
import React from "react";
import { useMutation } from "react-query";

const defaultOptions = {
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
  credentials: "include",
};

interface IParameters {
  headers: {
    [k: string]: string;
  };
  withCredentials: boolean;
  credentials: string;
}
const usePostQuery = (parameters?: IParameters | null) => {
  const {
    data,
    error,
    isLoading,
    isSuccess,
    mutate,
    /*  mutateAsync,
    isError,
    isIdle,
    isPaused,
    reset,
    status, */
  } = useMutation(
    ({
      data,
      apiUrl,
      options = parameters || defaultOptions,
    }: {
      data: Record<string, unknown>;
      apiUrl: string;
      options?: IParameters;
    }) => axios.post(apiUrl, data, options),
  );
  return { mutate, isSuccess, data, isLoading, error };
};
export default usePostQuery;
