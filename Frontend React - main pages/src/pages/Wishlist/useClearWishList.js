import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { clearWishList as clearWishListApi } from "../../service/userApi";

function useClearWishList(){
    const queryClient = useQueryClient()
    const {mutate : clearWishList , isLoading : clearingWishList} = useMutation({
        mutationFn : clearWishListApi,
        onSuccess : ()=> {
            toast.success("The WishList is Cleared Successfully")
            queryClient.invalidateQueries()
        },
        onError : (error)=> {
            toast.error(error.response.data.message)
        }
    })

    return {clearWishList , clearingWishList}
}

export default useClearWishList;