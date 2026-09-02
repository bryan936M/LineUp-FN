import axios from "axios";
import type { AxiosResponse, InternalAxiosRequestConfig } from "axios";

const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:8000/api/v1';
const REQUEST_TIMEOUT_LIMIT = Number(process.env.NEXT_PUBLIC_API_TIMEOUT_LIMIT || 5000);

export const backendApi = axios.create({
  baseURL: BASE_URL,
  timeout: REQUEST_TIMEOUT_LIMIT,
  withCredentials: true,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

backendApi.interceptors.request.use(
  function (config: InternalAxiosRequestConfig): InternalAxiosRequestConfig {
    return config;
  },
  function (error): Promise<never> {
    return Promise.reject(error);
  },
);

backendApi.interceptors.response.use(
  function (response: AxiosResponse): AxiosResponse {
    return response;
  },
  function (error): Promise<never> {
    return Promise.reject(error);
  },
);
