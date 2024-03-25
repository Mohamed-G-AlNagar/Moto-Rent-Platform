import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addCar as addCarApi } from "../../service/carApi";
import toast from "react-hot-toast";

function useAddCar() {
    const queryClient = useQueryClient()

   const {mutate : addCar , isLoading : isCreating , error} = useMutation({
    mutationFn : addCarApi,
    onSuccess : () => {
        toast.success("Car is Added Successfully");
        queryClient.invalidateQueries(["user"]);
    },
    onError : (error) => {
        toast.error(error.response.data.message )
    }
   })

   return {addCar , isCreating , error}
}

export default useAddCar;