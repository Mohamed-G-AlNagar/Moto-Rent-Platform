import { useQuery } from "@tanstack/react-query";
import { getAllAvailableCars } from "../../service/carApi";

function useAvailableCars(){
    const {data , isLoaing , error} = useQuery({
        queryKey : ["availableCars"],
        queryFn : getAllAvailableCars
    })

    return {data , isLoaing , error}
}

export default useAvailableCars