import { useMutation } from "@tanstack/react-query";
import { rentCar } from "../../service/carApi";
import toast from "react-hot-toast";

function useRentCar(){
    const {mutate : rentCarMutate , isLoading } = useMutation({

        mutationFn : rentCar,
        onSuccess : (data)=> {
            toast.success("Please Enter Your Payment Info")
        },
        onError : (error) => {
            toast.error(error.response.data.message === "jwt malformed" ? "please login first" :  error.response.data.message)
        }
    })
        return {rentCarMutate , isLoading }
}

export default useRentCar;