import axios, { AxiosPromise, AxiosResponse } from "axios";
import { ClinteDataInterface } from "../interface/SalaoData";
import { useMutation, useQuery, useQueryClient } from "react-query";

const API_URL = "http://localhost:8080";

const postData = async (data: ClinteDataInterface): AxiosPromise<any> => {
    const response = axios.post(API_URL + "/cliente", data);
    return response
}

export function useSalaoDataMutate() {
    const queryClient = useQueryClient();
    const mutate = useMutation({
        mutationFn: postData,
        retry: 2,
        onSuccess: () => {
            queryClient.invalidateQueries(['salao-query'])
        }
    })
    return mutate;
    

}