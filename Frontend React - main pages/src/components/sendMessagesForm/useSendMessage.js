import { useMutation } from "@tanstack/react-query";
import { addMessagee } from "../../service/messagesApi";
import toast from "react-hot-toast";
export function useSendMessage(){
   const{mutate:sendMessage,isLoading:isSending} =useMutation({
    mutationFn:addMessagee,
    onSuccess:()=>{
        toast.success("message send")
    },
    onError:()=>{
        toast.error("message do  not send ")
        
    },
   })

    return{sendMessage,isSending}
}
