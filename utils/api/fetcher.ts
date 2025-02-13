import Axios, { AxiosRequestConfig } from "axios";
import { CacheAxiosResponse, setupCache } from "axios-cache-interceptor";

const BASE_URL = process.env.NEXT_PUBLIC_API_URL;

const axiosInstance = Axios.create({
  baseURL: BASE_URL,
});

const axios = setupCache(axiosInstance, {});


const fetcher = async <T = any>(
  endpoint: string,
  method: "get" | "post" | "put" | "delete" | "patch",
  data: any = {},
  options: AxiosRequestConfig = {}
) => {
  try {
    const response = await axios({
      url: endpoint,
      method,
      data: Object.keys(data).length ? data : undefined, 
       headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_BACKEND_AUTH_TOKEN}`,
        "Cache-Control": "max-age=3600",
      },
      ...options,
    });

    return {
      data: response?.data?.data,
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
