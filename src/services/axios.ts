import axios, {AxiosError, AxiosHeaders} from 'axios';

import {API_GW_URL} from '@/config/config';

const httpClient = axios.create({
  baseURL: API_GW_URL,
  timeout: 10000,
});

httpClient.defaults.headers.post['content-type'] = 'application/json';

httpClient.interceptors.request.use(
  (request) => {
    return request;
  },
  (error: AxiosError) => {
    return Promise.reject(error);
  },
);

httpClient.interceptors.response.use(
  (response) => {
    return response;
  },
  (error: AxiosError) => {
    return Promise.reject(error);
  },
);

export {httpClient};
