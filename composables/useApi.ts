import { FetchOptions } from '~~/types/fetch'
import { useUserStore } from '../stores'

export default function useApi() {
    return (url: string, options?: FetchOptions) => {
        return useFetch<any>(`${url}`, {
            ...options,
            initialCache: false,
            onResponseError({ request, response, options }) {
                console.log('[fetch response error]', response._data?.message)
            }
        })
    }
}