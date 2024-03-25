import { useMutation, useQueryClient } from '@tanstack/react-query'
import { editCar as editCarApi } from '../../service/carApi'
import toast from 'react-hot-toast'

export default function useEditCar() {
    const queryClient = useQueryClient()
    const {mutate :editCar , isLoading : editingCar} = useMutation({
        mutationFn : editCarApi,
        onSuccess : () => {
            toast.success("The Car is Updated")
            queryClient.invalidateQueries(["cars"])
        },
        onError : (error) => {
            toast.error(error.respnse.data.message)
        }
    })
  return {editCar , editingCar}
}
