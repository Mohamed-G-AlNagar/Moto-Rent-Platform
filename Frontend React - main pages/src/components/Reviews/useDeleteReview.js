import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteReview as deleteReviewApi } from "../../service/reviewApi";
import toast from "react-hot-toast";

function useDeleteReview(id){
    const queryClient = useQueryClient();
    
    const {mutate : deleteReview, isLoading : deletingReview} = useMutation({
        mutationFn : deleteReviewApi,
        onSuccess : () => {
            queryClient.invalidateQueries(["reviews" , id])
        },
        onError : ()=> {
            toast.error("Something went wrong")
        }
    })

    return {deleteReview , deletingReview}
}

export default useDeleteReview;