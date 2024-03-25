import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addReview as addReviewApi } from "../../service/reviewApi";
import toast from "react-hot-toast";

function useAddReview(id){

    const queryClient = useQueryClient()

    const {mutate : addReview , isLoading : creatingReview} = useMutation({
        mutationFn : addReviewApi,
        onSuccess : ()=> {
            toast.success("Reviews Added Successfully")
            queryClient.invalidateQueries(["reviews" , id])
        },

        onError : ()=> {
            toast.error("Something went wrong")
        }
    })

    return {addReview , creatingReview}
}

export default useAddReview;