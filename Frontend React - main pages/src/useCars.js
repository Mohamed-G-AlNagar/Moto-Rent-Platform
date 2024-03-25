import { useQuery } from "@tanstack/react-query";
import { getAllCars } from "./service/carApi";

function useCars(){
    const {data , isLoaing , error} = useQuery({
        queryKey : ["cars"],
        queryFn : getAllCars
    })

    return {data , isLoaing , error}
}

export default useCars