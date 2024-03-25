import { useMutation } from "@tanstack/react-query";
import { getReviewById  as getReviewByIdApi} from "../../service/reviewApi";

function useGetSingleReview(id){
    const {mutate : getReviewById , isLoading} = useMutation({
        mutationFn : getReviewByIdApi,
    });

    return {getReviewById , isLoading}
}

export default useGetSingleReview;