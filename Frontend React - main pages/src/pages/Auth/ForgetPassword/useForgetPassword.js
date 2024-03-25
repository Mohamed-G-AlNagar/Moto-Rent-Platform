import { useMutation } from "@tanstack/react-query";
import { forgetPassword as forgetPasswordApi } from "../../../service/userApi";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

function useForgetPassword() {
  const navigate = useNavigate();
  const {
    isLoading,
    mutate: forgetPassword,
    data,
  } = useMutation({
    mutationFn: forgetPasswordApi,
    onSuccess: (user) => {
      toast.success("An Email is sent to your Email Address");
      // navigate("/resetPassword");
    },
    onError: () => {
      toast.error("Something went wrong, please try again");
    },
  });

  return { isLoading, forgetPassword, data };
}

export default useForgetPassword;
