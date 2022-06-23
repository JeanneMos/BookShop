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
const usePostQuery = (parameters) => {
  const {
    data,
    error,
    isError,
    isIdle,
    isLoading,
    isPaused,
    isSuccess,
    mutate,
    mutateAsync,
    reset,
    status,
  } = useMutation(({ data, apiUrl, options = parameters || defaultOptions }) =>
    axios.post(apiUrl, data, options),
  );
  return { mutate, isSuccess, data, isLoading, error };
};
export default usePostQuery;
