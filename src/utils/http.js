import axios from 'axios'

const API = axios.create({
   baseURL: 'http://localhost:99',
   timeout: 100000,
})

const admin = JSON.parse(localStorage.getItem('admin'))

API.interceptors.request.use((config) => {
   const token = admin.access_token
   if (token) {
      config.headers.Authorization = `Bearer ${token}`
   }

   return config
})

API.interceptors.response.use((response) => {
   return response
})

export default API
