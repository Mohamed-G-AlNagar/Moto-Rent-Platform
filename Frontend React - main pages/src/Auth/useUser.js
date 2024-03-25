import { useQuery } from "@tanstack/react-query";
import { getUser } from "../service/userApi";

export function useUser() {
  const token = localStorage.getItem("token");
  const { data, isLoading, error } = useQuery({
    queryKey: ["user"],
    queryFn: () => getUser(token),
  });
  return { data, isLoading, error };
}

export default useUser;
