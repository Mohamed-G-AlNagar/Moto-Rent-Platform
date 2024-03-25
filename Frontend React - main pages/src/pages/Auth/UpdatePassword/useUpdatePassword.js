import { useMutation } from "@tanstack/react-query";
import { logout, updatePassword as  updatePasswordApi} from "../../../service/userApi"
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";


function useUpdatePassword(reset){
    
    const navigate = useNavigate()
    const {mutate : mutatePassword , isLoading : updatingPassword} =  useMutation({
        mutationFn : updatePasswordApi,
        onSuccess : (data)=> {
            toast.success("Password is Updated Successfully, Please Login Again")
            console.log(data);
            if (data.status === 'Success'){
                localStorage.removeItem("token")
                reset()
                navigate("/login");
            }
        },

        onError : (error) => {
            console.log(error)
            toast.error(error.response.data.message)
        }
    })

    return { mutatePassword , updatingPassword}
}

export default useUpdatePassword;