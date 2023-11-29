const useGetUser = () => {
  const dataUser = JSON.parse(localStorage.getItem("user"))
  return dataUser
}

export default useGetUser