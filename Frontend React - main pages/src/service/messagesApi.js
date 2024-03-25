// import axios from "axios"

// export  async function addMessagee(values){
// const {data,error}= await axios.post("http://localhost:3000/api/v1/messages",values,{
//     headers: {
//         'Content-Type': 'multipart/form-data',
//         Authorization: `Bearer ${localStorage.getItem("token")} `
     
//     },
//   })
// if ( error){
//     return error
// } else {
//     return data
// }
// }
import axios from "axios"

export async function addMessagee(values) {
    try {
      const formData = new FormData();
      // Add fields to FormData
      formData.append('title', values.title);
      formData.append('body', values.body);
      // If 'attachments' is a file, append it to FormData
      if (values.attachments instanceof File) {
        formData.append('attachments', values.attachments);
      }
  
      const response = await axios.post("http://localhost:3000/api/v1/messages", formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: `Bearer ${localStorage.getItem("token")}`
        },
      });
  console.log(response)
      return response.data; // Return data on success
    } catch (error) {
      console.error('Error:', error);
      return { error: error.message }; // Return error message
    }
  }

 export async function getUserMessage(){
  const{data,error} =   await axios.get("http://localhost:3000/api/v1/messages",{
        headers:{
            Authorization: `Bearer ${localStorage.getItem("token")}`
        }
      })
      if (data){
        console.log("message user returened sucessefully",data)
        return data
      }
      const messageIdes=data._id
      console.log("idesss",messageIdes)
if(error){
    console.log("error message user ",error)
        return error 
}
  }

  export  async function getAdminReplyForUserMessage(id){
const { data, error}=await axios.get(`http://localhost:3000/api/v1/messages/${id}`,{
    headers:{
        Authorization: `Bearer ${localStorage.getItem("token")}`
    }
  })
   if (data){
    console.log("admin has replied on message user",data)
        return data
  }
  if(error){
    console.log("error with admin reply ",error)
    throw error 
} 
}

