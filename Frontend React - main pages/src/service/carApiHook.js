import axios from "axios";
import { useQuery } from "@tanstack/react-query";

async function fetchCars() {
  return await axios.get("http://localhost:3000/api/v1/cars/");
}

const useFetchingCarHook = () => {
  return useQuery({
    queryKey:["fetchCars"],
    queryFn:fetchCars},{

    retry: 3, 
    retryDelay: attemptIndex => Math.min(1000 * 2 ** attemptIndex, 30000)
});
};

export default useFetchingCarHook;
