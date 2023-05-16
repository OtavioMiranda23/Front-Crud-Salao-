import axios, { AxiosResponse } from "axios";
import { ClinteDataInterface } from "../interface/SalaoData";
import { useQuery } from "react-query";

const API_URL = "http://localhost:8080";

const fetchData = async (): Promise<AxiosResponse<ClinteDataInterface>> => {
    const response = axios.get(API_URL + "/cliente");
    return response
}

export function useSalaoData() {
    const query = useQuery({
        queryFn: fetchData,
        queryKey: ['salao-query'],
        retry: 2
    })
    return {
        ...query,
        data: query.data

    } 
    

}