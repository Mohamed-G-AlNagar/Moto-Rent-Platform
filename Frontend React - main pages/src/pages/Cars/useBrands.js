import { useQuery } from '@tanstack/react-query'
import { getAllBrands } from '../../service/carApi';


export function useBrands() {
    const {data : carBrands , isLoading : isGettingCarBrands} = useQuery({
        queryKey : ["carBrands"],
        queryFn : getAllBrands
    })
  return {carBrands , isGettingCarBrands}
}

export default useBrands;