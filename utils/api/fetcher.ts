import axios, { AxiosError } from "axios";
import { redirect } from "next/navigation";

const BASE_URL = process.env.NEXT_PUBLIC_API_URL;

const fetcher = async (endpoint: string, options = {}) => {
  try {
    const res = await axios(`${BASE_URL}/${endpoint}`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_BACKEND_AUTH_TOKEN}`,
      },
      ...options,
    });

    if (res.status !== 200) {
      throw new Error(`Error fetching ${endpoint}: ${res.statusText}`);
    }
    return {
      data: res.data.data,
      success: true,
    };
  } catch (error: unknown) {
    return {
      success: false,
      error: error,
    };
  }
};

export default fetcher;
