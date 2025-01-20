import { IGeneralApiRes } from "@/types/apiResponse";
import fetcher from "@/utils/api/fetcher"

export const fetchGeneral = async ()=>{
    const response:IGeneralApiRes = await fetcher("/general?populate=*")
    return response;
}
