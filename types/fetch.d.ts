export interface FetchOptions {
    method?: string,
    body?: Object,
    query?: Object,
    [key: string]: any
}

export interface FetchResponse<TData = any> {
    status: number,
    message: string,
    data?: TData
}