import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateReview  as updateReviewApi} from "../../service/reviewApi";
import toast from "react-hot-toast";

function useUpdatedReview() {
    const queryClient = useQueryClient()
    const {mutate : updateReview, isLoading : updatingReview} = useMutation({
        mutationFn : updateReviewApi,
        onSuccess : (data) => {
            toast.success("Review Updated Successfully")
            console.log(data)
            queryClient.invalidateQueries(["reviews"])
        },

        onError : ()=> {
            toast.error("Something Wrong happend")
        }
    })

    return {updateReview , updatingReview}
}

export default useUpdatedReview;