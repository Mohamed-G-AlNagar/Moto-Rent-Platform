import { useQuery } from "@tanstack/react-query";
import { getAllCarReviwes } from "../../service/reviewApi";

function useGetAllReviews(id){
    const {data , isLoading} = useQuery({
        queryKey : ["reviews"],
        queryFn :  () => getAllCarReviwes(id)
    })

    console.log(data)

    return {data , isLoading}
}

export default useGetAllReviews;