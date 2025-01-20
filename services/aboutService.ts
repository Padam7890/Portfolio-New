import fetcher from "@/utils/api/fetcher"

export const fetchGeneral = async ()=>{
    const response = await fetcher("/general")
    return response;
}