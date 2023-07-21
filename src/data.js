import axios from 'axios'

const api = axios.create()

api.interceptors.request.use(async (options) => {
  const accessToken = localStorage.getItem('accessToken')
  options.headers.Authorization = accessToken
  return options
})

export async function getUser() {
  const serverUrl =
    process.env.NODE_ENV === 'development'
      ? 'http://localhost:8080/'
      : document.location.origin
  axios.defaults.baseURL = serverUrl
  const { data } = await api.get(`${serverUrl}accounts/users`)
  return data
}
