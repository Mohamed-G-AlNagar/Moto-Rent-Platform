import axios from "axios";

export async function signup(values) {
  const { error, data } = await axios.post(
    "http://localhost:3000/api/v1/users/signup",
    values
  );

  if (error) return error;

  return data;
}

export async function login(values) {
  const { error, data } = await axios.post(
    "http://localhost:3000/api/v1/users/login",
    values
  );

  if (error) return error;
  return data;
}

export async function forgetPassword(values) {
  const { error, data } = await axios.post(
    "http://localhost:3000/api/v1/users/forgotPassword",
    values
  );

  if (error) return error;
  return data;
}

export async function resetPassword(values) {
  const { password, passwordConfirm, code } = values;
  const { error, data } = await axios.patch(
    `http://localhost:3000/api/v1/users/resetPassword/${code.trim()}`,
    {
      password,
      passwordConfirm,
    }
  );

  if (error) return error;
  return data;
}

export async function updateMyProfile(values){
  const {data , error} = await axios.patch(`http://localhost:3000/api/v1/users/userProfile` , values , {
    headers : {
      Authorization : `Bearer ${localStorage.getItem("token")}`
    }
  })

  if(error) return error;

  return data;
  
}

export async function updatePassword(values){
  const {data , error} = await axios.patch(`http://localhost:3000/api/v1/users/userProfile/updatePassword` , values , {
    headers : {
      Authorization : `Bearer ${localStorage.getItem("token")}`
    }
  })

  if (error) return error;

  return data;
}

export async function getUser(token) {
  const { error, data } = await axios.get(
    `http://localhost:3000/api/v1/users/userProfile`,
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    }
  );

  if (error) return error;

  return data;
}

export async function logout() {
  const { error, data } = await axios.post(
    `http://localhost:3000/api/v1/users/logout`,
    null,
    {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    }
  );

  if (error) return error;

  return data;
}

export async function addToWishList(id){
  const {data , error} = await axios.patch(`http://localhost:3000/api/v1/users/wishlist/${id}` , null , {
    headers : {
      Authorization : `Bearer ${localStorage.getItem("token")}`
    }
  })

  if(error) return error

  return data
}

export async function removeFromWishList(id){
  const {data , error} = await axios.delete(`http://localhost:3000/api/v1/users/wishlist/${id}` , {
    headers : {
      Authorization : `Bearer ${localStorage.getItem("token")}`
    }
  })

  if(error) return error

  return data
}

export async function clearWishList(){
  const {data , error} = await axios.delete("http://localhost:3000/api/v1/users/clearWishlist" ,{
    headers : {
      Authorization : `Bearer ${localStorage.getItem("token")}`
    }
  })

  if (error) return error

  return data;
}