import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateMyProfile as updateMyProfileApi } from "../../service/userApi";
import toast from "react-hot-toast";

function useUpdateProfile(){
    const queryClient = useQueryClient()
    const {mutate : updateMyProfile, isLoading : updatingProfile} = useMutation({
        mutationFn : updateMyProfileApi,
        onSuccess : ()=> {
            toast.success("Profile updated Successfully")
            queryClient.invalidateQueries(["user"])
        },
        onError : (error) => {
            toast.error(error.response.data.message)
        }
    })
    return {updateMyProfile , updatingProfile}
}

export default useUpdateProfile;