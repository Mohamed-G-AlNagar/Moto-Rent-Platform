import axios from "axios";

export async function getAllCars() {
  const { data, error } = await axios.get("http://localhost:3000/api/v1/cars/");

  if (error) return error;

  return data;
}
export async function getAllAvailableCars() {
  const { data, error } = await axios.get("http://localhost:3000/api/v1/cars/getAllAvailableCars");

  if (error) return error;

  return data;
}


export async function addCar(values) {
  const { data, error } = await axios.post("http://localhost:3000/api/v1/cars/addCar", values, {
    headers: {
      'Content-Type': 'multipart/form-data',
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    }
  });

  if (error) return error;

  return data;
}
export async function editCar(values) {
  console.log(values)
  console.log("Form Data:");
  let id;
for (const pair of values.entries()) {
  if (pair[0] === "id") {
    id = pair[1]
    console.log(id)
  }
}
  const { data, error } = await axios.patch(`http://localhost:3000/api/v1/cars/${id}`, values, {
    headers: {
      'Content-Type': 'multipart/form-data',
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    }
  });

  if (error) return error;

  return data;
}

export async function getAllCarCategories(){
  const {data , error} = await axios.get("http://localhost:3000/api/v1/cars/getAllCategories");

  if (error) return error;

  return data;
}

export async function getAllBrands(){
  const {data , error} = await axios.get("http://localhost:3000/api/v1/brands");
  if (error) return error;

  return data;
}


export async function deleteCar(id){

  const {data ,error} = await axios.delete(`http://localhost:3000/api/v1/cars/${id}`, 
    {
      headers : {
        'Content-Type': 'application/json',
        Authorization : `Bearer ${localStorage.getItem("token")}`, 
      }
    }  
  )
  if (error) return error;

  return data;
}

export async function getTopFiveExpensiveCars(){
  const {data , error} = await axios.get("http://localhost:3000/api/v1/cars/getTop5ExpensiveCars")
    if(error) return error;

    return data
}

export async function getTopFiveCheapestCars(){
  const {data , error} = await axios.get("http://localhost:3000/api/v1/cars/getTop5CheapestCars")
    if(error) return error;

    return data
}

export async function getTopFiveCars(){
  const {data , error} = await axios.get("http://localhost:3000/api/v1/cars/getTop5Cars")
    if(error) return error;

    return data
}

export async function rentCar(values){
  const {data , error} = await axios.post("http://localhost:3000/api/v1/rentals/createRental" , values ,
  {
    headers: {   
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    }
  }
  )
  if (error) return error;

  return data;
}

export async function getCarById(id){
  console.log(id)
  const {data , error} = await axios.get(`http://localhost:3000/api/v1/cars/${id}` , {
    headers : {
      Authorization : `Bearer ${localStorage.getItem("token")}`
    }
  })

  if (error) return error

  return data;
}