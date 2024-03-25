import { useQuery } from '@tanstack/react-query'
import { getTopFiveExpensiveCars } from '../../service/carApi'

export function useGetTopFiveExpensive() {
    const {data , isLoading} = useQuery({
        queryKey : ["TopFiveExpensiveCars"],
        queryFn : getTopFiveExpensiveCars
    })
  return {data , isLoading}
}

export default useGetTopFiveExpensive;