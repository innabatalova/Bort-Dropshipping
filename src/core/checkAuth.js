class checkAuth {

  checkUser = (...values) => {
    const dataUser = JSON.parse(localStorage.getItem("user"))
    return (values[0].email === dataUser.email && values[0].password === dataUser.password)
  }

}

export default new checkAuth