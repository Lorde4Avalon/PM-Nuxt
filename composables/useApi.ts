import { FetchOptions, FetchResponse } from '~~/types/fetch'
import { useUserStore } from '../stores'

export default function useApi<TData = any>(url: string, options?: FetchOptions) {
    return useFetch<FetchResponse<TData>>(`${url}`, {
        ...options,
        onRequest({ request, options }) {
            // console.log(options);
        },
        onResponseError({ request, response, options }) {
            console.log('[fetch response error]', response._data)
            if (response._data.statusCode === 500) {
                console.log('Server error');
            }
        }
    })
}