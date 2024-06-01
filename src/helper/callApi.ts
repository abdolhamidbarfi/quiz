import axios, { AxiosRequestConfig } from "axios"
import { baseApiEndpoind } from "./baseUrls"




export default function callApi() {

    const axiosInstance = axios.create({
        baseURL: baseApiEndpoind,

    })

    axiosInstance.interceptors.request.use(
        requsetConfig => {
            return requsetConfig
        },
        onRejected => { throw onRejected }
    )


    axiosInstance.interceptors.response.use(
        response => response,
        error => {
            const res = error.response
            if (res) {
                if (res.status === 422) {
                    throw res.data.errors
                }
            }
            throw error
        }
    )


    return axiosInstance
}



