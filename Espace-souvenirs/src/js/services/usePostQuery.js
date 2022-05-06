import React from 'react';
import {
  useMutation,
} from 'react-query';
import axios from 'axios';

const defaultOptions = {
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true,
  credentials: 'include'
};
const usePostQuery = () =>
  useMutation(({data, postApiUrl, options = defaultOptions}) => axios.post(postApiUrl, data, options), {
    onSuccess: () => {
      //queryClient.invalidateQueries(['todos', 'list'])
    }, 
  });

export default usePostQuery;
