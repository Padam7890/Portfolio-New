import Axios, { AxiosRequestConfig } from "axios";
import { setupCache } from "axios-cache-interceptor"

const BASE_URL = process.env.NEXT_PUBLIC_API_URL;

const axiosInstance = Axios.create({
  baseURL: BASE_URL,
});

const axios = setupCache(axiosInstance,{
});

interface FetcherResponse<T> {
  data?: T;
  success: boolean;
  error?: string;
}

const fetcher = async <T = any>(
  endpoint: string,
  options: AxiosRequestConfig = {}
): Promise<FetcherResponse<T>> => {
  try {
    const response = await axios.get(endpoint, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_BACKEND_AUTH_TOKEN}`,
        "Cache-Control": "max-age=3600",
      },
      ...options,
    });

    return {
      data: response.data.data,
      success: true,
    };
  } catch (error: unknown) {
    const errMsg = (error as any)?.response?.data || (error as Error)?.message;
    return {
      success: false,
      error: errMsg || "Unknown error occurred",
    };
  }
};

export default fetcher;
