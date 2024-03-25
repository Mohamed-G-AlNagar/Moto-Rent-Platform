import { useQuery } from '@tanstack/react-query';
import { getAllCarCategories } from '../../service/carApi';

export function useCategories() {
    const {data : carCategories , isLoading : isGettingCategories} = useQuery({
        queryKey : ["carCategories"],
        queryFn : getAllCarCategories
    })
  return {carCategories , isGettingCategories}
}

export default useCategories;
