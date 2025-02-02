import fetcher from "@/utils/api/fetcher";

export const handleApiRequest = async (endpoint: string) => {
  try {
    const response = await fetcher(`${endpoint}?populate=*`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching data from ${endpoint}:`, error);
    return undefined;
  }
};
export const fetchPersonalInfo = async () => handleApiRequest("personalinfo");
export const fetchGeneralInfo = async () => handleApiRequest("general");
export const fetchSkillInfo = async () => handleApiRequest("skills");
export const fetchResumeInfo = async () => handleApiRequest('experiences');
export const fetchCategoryInfo = async () => handleApiRequest('categories');
export const fetchPortfoliosInfo = async (categoryId:any) => handleApiRequest("portfolios");
