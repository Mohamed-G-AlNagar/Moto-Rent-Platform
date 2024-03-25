import { useMutation } from "@tanstack/react-query";
import { login as loginApi } from "../../../service/userApi";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

function useLogin() {
  const navigate = useNavigate();
  const {
    mutate: login,
    isLodaing,
    data,
  } = useMutation({
    mutationFn: loginApi,
    onSuccess: (user) => {
      toast.success("You logged in successfully");
      navigate("/");
    },
    onError: () => {
      toast.error("Faild to login, please try again later");
    },
  });

  return { isLodaing, login, data };
}

export default useLogin;
