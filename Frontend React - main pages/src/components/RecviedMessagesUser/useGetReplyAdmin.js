import {useQuery} from "@tanstack/react-query"
import { getAdminReplyForUserMessage } from "../../service/messagesApi"
export const useGetReplyAdmin= ()=>{
   return useQuery({
        queryKey:["fetchreplyAdmin"],
        queryFn:getAdminReplyForUserMessage
    })

}