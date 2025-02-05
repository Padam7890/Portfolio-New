import { axiosMethod } from "@/types/apiResponse";
import fetcher from "@/utils/api/fetcher";

export const handleApiRequest = async (
  endpoint: string,
  method: axiosMethod,
  data?: any
) => {
  try {
    const response = await fetcher(`${endpoint}?populate=*`, method, data);
    if (response.success) {
      return response.data;
    } else {
      console.error(`Failed to fetch data from ${endpoint}:`, response.error);
      return undefined;
    }
  } catch (error) {
    console.error(`Error fetching data from ${endpoint}:`, error);
    return undefined;
  }
};

export const fetchPersonalInfo = async () =>
  handleApiRequest("personalinfo", "get");
export const fetchGeneralInfo = async () => handleApiRequest("general", "get");
export const fetchSkillInfo = async () => handleApiRequest("skills", "get");
export const fetchResumeInfo = async () =>
  handleApiRequest("experiences", "get");
export const fetchCategoryInfo = async () =>
  handleApiRequest("categories", "get");
export const fetchPortfoliosInfo = async (categoryId: any) =>
  handleApiRequest("portfolios", "get");
export const sendcontact = async (data: any) =>
  handleApiRequest("contact", "post", data);

export const fetchBlogs = async () => handleApiRequest("blogs", "get");
