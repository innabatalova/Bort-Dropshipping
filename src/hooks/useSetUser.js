const useSetUser = (value) => {
  localStorage.setItem("user", JSON.stringify(value))
}

export default useSetUser