import { FetchOptions } from '~~/types/fetch'
import { useUserStore } from '../stores'

export default function useApi() {
    return (url: string, options?: FetchOptions) => {
        return useFetch<any>(`${url}`, {
            ...options,
            onResponseError({ request, response, options }) {
                console.log('[fetch response error]', response._data)
                if (response._data.statusCode === 500) {
                    const user = useCookie('user')
                }
            }
        })
    }
}