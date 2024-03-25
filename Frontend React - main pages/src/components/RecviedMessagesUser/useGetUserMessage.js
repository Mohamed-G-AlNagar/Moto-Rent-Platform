import {  useQuery} from "@tanstack/react-query";
import { getUserMessage } from "../../service/messagesApi";

export  const useGetUserMessage=()=>{
  return  useQuery({
    queryKey:["fetchingUserMessage"],
    queryFn:getUserMessage
  })
}