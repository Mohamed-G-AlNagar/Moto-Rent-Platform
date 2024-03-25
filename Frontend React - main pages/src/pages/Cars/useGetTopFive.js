import { useQuery } from '@tanstack/react-query'
import { getTopFiveCars } from '../../service/carApi'

export function useGetTopFive() {
    const {data , isLoadig} = useQuery({
        queryKey : ["topFiveCars"],
        queryFn : getTopFiveCars
    })
  return {data , isLoadig}
}

export default useGetTopFive;