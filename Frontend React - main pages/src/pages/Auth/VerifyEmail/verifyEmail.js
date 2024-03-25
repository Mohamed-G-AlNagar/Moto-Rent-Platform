export async function verifyMail(verifyToken) {
    const {data, error  } = await axios.get(
      `http://localhost:3000/api/v1/users/verify/${verifyToken}`
    );
  console.log(data,"data");
  console.log(error,"error");
    if (error) return error;
    return data;
  }