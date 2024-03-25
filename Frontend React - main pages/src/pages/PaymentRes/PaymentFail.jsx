import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import FailureAlert from './FailureAlert'
import LoadingIndicator from '../../ui/LoadingIndicator'

export default function PaymentFail() {
    const {rentId} = useParams()
    const [isLoading , setIsloading] = useState(false)
    
    async function payRes() {
        const {data , error } = await axios.get(`http://localhost:3000/api/v1/rentals/failure/${rentId}` , {
            headers : {
                Authorization : `Bearer ${localStorage.getItem("token")}`
            }
        })
        
        if(error) return error

        return data 
    }

    useEffect( function() {
        setIsloading(true)
        payRes()  
        setIsloading(false)   
     } ,[]
    )

  return (
    <div>
      {isLoading ? <LoadingIndicator load={isLoading}/> : <FailureAlert />}
    </div>
  )
}
