import { useMutation, useQueryClient } from '@tanstack/react-query';
import { deleteCar as deleteCarApi } from '../../service/carApi';
import toast from 'react-hot-toast';

export function useDeleteCar() {
    const queryClient = useQueryClient()
    const {mutate : deleteCar , isLoading : isDeleting} = useMutation({
        mutationFn : deleteCarApi,
        onSuccess: () => {
            toast.success("Car is deleted Successfully")
            queryClient.invalidateQueries(["user"])
        },

        onError : (error) => {
            toast.error(error.response.data.message)
        }
    })
  return {deleteCar , isDeleting}
}

export default useDeleteCar;