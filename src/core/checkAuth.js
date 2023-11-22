class checkAuth {

  createUser = (...values) => {
    const user = {
      bio: values[0].bio,
      inn: values[0].inn,
      tel: values[0].tel,
      email: values[0].email,
      password: values[0].password
    }
    localStorage.setItem("user", JSON.stringify(user))
  }

  checkUser = (...values) => {
    const dataUser = JSON.parse(localStorage.getItem("user"))
    return (values[0].email === dataUser.email && values[0].password === dataUser.password)
  }

}

export default new checkAuth