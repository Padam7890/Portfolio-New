import { IGeneralApiRes } from "@/types/apiResponse";
import fetcher from "@/utils/api/fetcher";

export const fetchGeneral = async () => {
  try {
    const response = await fetcher("general?populate=*");
    return response.data;
  } catch (error) {
    return ;
  }
};
