import axios, { Method } from "axios";

const api = axios.create({
    baseURL: 'http://localhost:3000',
})


export const sendRequest = <T>(method: Method, url: string): Promise<T> => {

    return api.request<T>({url, method}).then((response) => {
        return response.data
    })
}
