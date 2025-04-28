import axios, { AxiosInstance, AxiosResponse, AxiosError, AxiosRequestConfig } from 'axios'

// Create base axios instance
const apiService: AxiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:3001',
  headers: {
    'Content-Type': 'application/json'
  },
  timeout: 10000 // 10 seconds
})

// Request interceptor
apiService.interceptors.request.use(
  (config) => {
    // Get token from localStorage
    // const token = localStorage.getItem('accessToken')
    
    // // If token exists, add to headers
    // if (token) {
    //   config.headers.Authorization = `Bearer ${token}`
    // }
    
    return config
  },
  (error: AxiosError) => {
    return Promise.reject(error)
  }
)

// Response interceptor
apiService.interceptors.response.use(
  (response: AxiosResponse) => {
    return response.data
  },
  async (error: AxiosError) => {
    // Handle 401 Unauthorized errors
    if (error.response?.status === 401) {
      // Clear localStorage
      localStorage.clear()
      
      // Redirect to login page
      window.location.href = '/auth/login'
    }
    
    return Promise.reject(error)
  }
)

// Common API methods
export const api = {
  get: <T>(url: string, params = {}) => 
    apiService.get<T>(url, { params }),
    
  post: <T>(url: string, data = {}, config?: AxiosRequestConfig) => 
    apiService.post<T>(url, data,config),
    
  put: <T>(url: string, data = {}) => 
    apiService.put<T>(url, data),
    
  delete: <T>(url: string) => 
    apiService.delete<T>(url)
}

export default apiService 