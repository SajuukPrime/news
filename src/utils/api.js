import axios from "axios"
import urlData from "./baseurl"

const api = axios.create({
    baseURL: urlData
})

export default api