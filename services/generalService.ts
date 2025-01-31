import { IGeneralApiRes } from "@/types/apiResponse";
import fetcher from "@/utils/api/fetcher";

export const fetchPersonalInfo = async () => {
  try {
    const response = await fetcher("personalinfo");
    return response.data;
  } catch (error) {
    return ;
  }
};

export const fetchGeneralInfo = async () => {
  try {
    const response = await fetcher("general?populate=*");
    return response.data;
  } catch (error) {
    return ;
  }
};
