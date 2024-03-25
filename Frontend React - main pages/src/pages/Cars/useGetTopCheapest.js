import { useQuery } from '@tanstack/react-query';
import { getTopFiveCheapestCars } from '../../service/carApi';

export function useGetTopCheapest() {
    const {data , isLoading} = useQuery({
        queryKey : ["TopCheapestCars"],
        queryFn : getTopFiveCheapestCars
    })
  return {data , isLoading}
}

export default useGetTopCheapest;