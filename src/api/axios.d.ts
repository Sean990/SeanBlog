import Axios, { AxiosInterceptorManager, AxiosRequestConfig, AxiosResponse } from 'axios'

/**
 * 由于在相应拦截器中对response做了处理，所以需要重新定义AxiosResponse
 * 并且对axios默认方法添加泛型
 */
export interface ModoApiResponse<T = any> extends Promise<T>  {
}

export interface AxiosInstance {
    <T = any>(config: AxiosRequestConfig): ModoApiResponse<T>;
    (url: string, config?: AxiosRequestConfig): ModoApiResponse;
    defaults: AxiosRequestConfig;
    interceptors: {
        request: AxiosInterceptorManager<AxiosRequestConfig>;
        response: AxiosInterceptorManager<AxiosResponse>;
    };
    request<T = any>(config: AxiosRequestConfig): ModoApiResponse<T>;
    get<T = any>(url: string, config?: AxiosRequestConfig): ModoApiResponse<T>;
    delete(url: string, config?: AxiosRequestConfig): ModoApiResponse;
    head(url: string, config?: AxiosRequestConfig): ModoApiResponse;
    post<T = any>(url: string, data?: any, config?: AxiosRequestConfig): ModoApiResponse<T>;
    put<T = any>(url: string, data?: any, config?: AxiosRequestConfig): ModoApiResponse<T>;
    patch<T = any>(url: string, data?: any, config?: AxiosRequestConfig): ModoApiResponse<T>;
}

/* eslint-disable no-multi-spaces */
export interface ModoApi<T = any> {
    msg: string             // 客户端展示用
    info?: string | null    // 给自己人看的
    code?: number           // 新版接口code
    statusCode?: number     // 旧接口code
    data?: T                // 新接口data
    respData?: T            // 旧接口data
    pageCount?: number      // 旧接口总页数
}

export interface ModoList {
    currPage?: number
    list: any
    pageSize?: number
    totalCount?: number
    totalPage?: number
}

export default Axios
