import { useMutation } from "@tanstack/react-query";
import { resetPassword as resetPasswordApi } from "../../../service/userApi";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

function useResetPassword() {
  const navigate = useNavigate();
  const {
    mutate: resetPassword,
    isLoading,
    data,
  } = useMutation({
    mutationFn: resetPasswordApi,
    onSuccess: () => {
      toast.success("Your Pasasword is succesffuly changed");
      navigate("/login");
    },
    onError: () => {
      toast.error("Something went wrong , please try again");
    },
  });

  return { resetPassword, isLoading, data };
}

export default useResetPassword;
