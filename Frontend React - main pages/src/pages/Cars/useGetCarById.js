import { useQuery } from "@tanstack/react-query";
import { getCarById } from "../../service/carApi";

function useGetCar(id){
    const {data , isLoading} = useQuery({
        queryKey : ["car"],
        queryFn : ()=> getCarById(id)
    })

    return {data , isLoading}
}

export default useGetCar;