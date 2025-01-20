import axios from "axios";

const BASE_URL = process.env.NEXT_PUBLIC_API_URL;

const fetcher = async (endpoint: string, options = {}) => {
  const res = await axios(`${BASE_URL}${endpoint}`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_BACKEND_AUTH_TOKEN}`,
    },
    ...options,
  });

  if (res.status !== 200) {
    throw new Error(`Error fetching ${endpoint}: ${res.statusText}`);
  }

  return res.data;
};

export default fetcher;
