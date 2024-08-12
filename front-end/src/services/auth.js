import api from './index'

export const signUp = async (dataSignUp) => {
  console.log("auth.signup", dataSignUp)
  const { data } = await api.post('/auth/signup', dataSignUp)
  return data
}

export const login = async (dataLogin) => {
  const  { data }  = await api.post('/auth/login', dataLogin)
  return data
}