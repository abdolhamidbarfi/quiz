import axios, { AxiosRequestConfig, AxiosResponse } from "axios"
import { baseApiEndpoind } from "./baseUrls"




function customAxios() {

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


interface CallApiInterface {
    get: (url: string, config?: AxiosRequestConfig<any>) => Promise<AxiosResponse<any, any>>
    post: (url: string, data: any, config?: AxiosRequestConfig<any>) => Promise<AxiosResponse<any, any>>
    delete: (url: string, config?: AxiosRequestConfig<any>) => Promise<AxiosResponse<any, any>>
    put: (url: string, data: any, config?: AxiosRequestConfig<any>) => Promise<AxiosResponse<any, any>>
}

export const callApi: CallApiInterface = {
    async get(url, config) {
        return await customAxios().get(url, config)
            .then((res) => res)
            .catch(err => err)
    },

    async post(url, data, config) {
        return await customAxios().post(url, data, config)
            .then((res) => res)
            .catch(err => err)
    },

    async delete(url, config) {
        return await customAxios().delete(url, config)
            .then((res) => res)
            .catch(err => err)
    },

    async put(url, data, config) {
        return await customAxios().put(url, data, config)
            .then((res) => res)
            .catch(err => err)
    }
}



