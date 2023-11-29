const useCreateUser = (...values) => {
  const user = {
    bio: values[0].bio,
    inn: values[0].inn,
    tel: values[0].tel,
    email: values[0].email,
    password: values[0].password
  }
  localStorage.setItem("user", JSON.stringify(user))
}

export default useCreateUser