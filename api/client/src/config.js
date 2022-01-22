import axios from "axios"

export const axiosInstance = axios.create({
    baseURL : "https://blog-swift.herokuapp.com/api/"
})