import axios from "axios";

export async function addReview(values){
    const {data , error } = axios.post("http://localhost:3000/api/v1/reviews/addReview" , values , {
        headers : {
            Authorization : `Bearer ${localStorage.getItem("token")}`
        }
    })

    if (error) return error

    return data
}

export async function getAllCarReviwes(id){
    console.log(id)
    const {data , error } = await axios.get(`http://localhost:3000/api/v1/reviews/getAllReviewsOnCar/${id}` , {
        headers : {
            Authorization : `Bearer ${localStorage.getItem("token")}`
        }
    })

    if (error) return error
    
    return data
}

export async function deleteReview(id){
    const {data , error } = await axios.delete(`http://localhost:3000/api/v1/reviews/${id}` , {
        headers : {
            Authorization : `Bearer ${localStorage.getItem("token")}`
        }
    })

    if (error) return error
    
    return data
}

export async function getReviewById(id){
    const {data , error} = await axios.get(`http://localhost:3000/api/v1/reviews/${id}`, {
        headers : {
            Authorization : `Bearer ${localStorage.getItem("token")}`
        }
    })

    if (error) return error

    return data
}

export async function updateReview(values){
    console.log(values)
    const {reviewId , ...val} = values
    console.log(reviewId);
    console.log(val)
    const {data , error} = await axios.patch(`http://localhost:3000/api/v1/reviews/${reviewId}`, val,{
        headers : {
            Authorization : `Bearer ${localStorage.getItem("token")}`
        }
    })

    if (error) return error

    return data
}

