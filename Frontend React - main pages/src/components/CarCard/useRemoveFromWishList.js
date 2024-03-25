import { useMutation, useQueryClient } from "@tanstack/react-query";
import { removeFromWishList as removeFromWishListApi } from "../../service/userApi";
import toast from "react-hot-toast";

function useRemoveFromWishList(){
    const queryClient = useQueryClient()
    const {mutate : removeFromWishList, isLoading : removingFromWishList } = useMutation({
        mutationFn : removeFromWishListApi,
        onSuccess : ()=> {
            queryClient.invalidateQueries(["user"])
        },

        onError : (error)=> {
            toast.error(error.response.data.message === "jwt malformed" ? "please login first" :  error.response.data.message)
        }
    })

    return { removeFromWishList , removingFromWishList}
}

export default useRemoveFromWishList;