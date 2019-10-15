import axios, { AxiosPromise, AxiosRequestConfig } from 'axios'
import browser from '@/utils/browser'
import { ModoApi } from '@/api/axios'
import store from '../store'
import {isEmptyObj} from '@/utils/common'

declare module 'axios/index' {
    // AxiosRequestConfig 添加自定义属性
    interface AxiosRequestConfig {
        replaceData?: any
    }
}

interface RejectError {
    message: string,
    config: AxiosRequestConfig,
    code?: string | null,
    request?: any,
    response?: any
}

// --------------------------------------------------- axios config ---------------------------------------------------
const baseurl = process.env.VUE_APP_BASE_URL
if (process.env.NODE_ENV === 'production') {
    axios.defaults.baseURL = baseurl
} else {
    axios.defaults.baseURL = 'http://localhost:3000/'
}
axios.defaults.timeout = 20000

// 添加请求拦截器
axios.interceptors.request.use((config: AxiosRequestConfig) => {
    // 处理需要将参数放到url中的接口
    handleUrl(config)
    if (config.method === 'post' || config.method === 'put') {
        // post、put 提交时，将对象转换为string, 为处理后台解析问题
        config.data = JSON.stringify(config.data)
    } else if (config.method === 'get' && browser.isIE) {
        // 给GET 请求后追加时间戳， 解决IE GET 请求缓存问题
        let symbol = config.url && config.url.indexOf('?') >= 0 ? '&' : '?';
        config.url += symbol + '_=' + Date.now()
    }
    // 设置 post、put 默认 Content-Type
    config.headers.post['Content-Type'] = 'application/json';
    config.headers.put['Content-Type'] = 'application/json';
    config.headers['Cache-control'] = 'no-cache'
    config.headers.Pragma = 'no-cache'
    // 请求发送前进行处理
    return config
}, error => {
    // 请求错误处理
    return Promise.reject(error)
});

// 添加一个响应拦截器
axios.interceptors.response.use(response => {
    const prototype = Object.prototype.toString.call(response.data).toLowerCase()
    const requestURL = response.request.responseURL
    const apiPath = requestURL!.replace(response.config.baseURL!, '')
    const method = response.config.method

    // 返回了二进制文件
    if (/blob/.test(prototype)) return response.data

    if (response.status === 200) {
        const data: ModoApi = response.data
        const code = data.code || data.statusCode
        switch (code) {
            case 200:
                return Promise.resolve(data.respData || data.data)

            case 401:
                store.state.currRouter.instance.push({ name: 'login' })
                // notification.error({
                //     message: '登陆状态失效',
                //     description: '可能是被别人抢登导致，请重新登陆',
                // })
                return Promise.reject(new Error('登陆状态失效，请重新登陆'))

            case 403:
                store.state.currRouter.instance.push({ path: '403', query: { msg: method + '：' + apiPath } })
                // message.error(data.info)
                return Promise.reject(data.info)

            default:
                // message.error(apiPath + '------' + data.info, 5)
                return Promise.reject(new Error(data.msg))
        }
    } else {
        // notification.error({
        //     message: '请求失败，错误码：' + response.status,
        //     description: response.statusText,
        // })
        return Promise.reject(new Error(response.statusText))
    }
}, error => {
    return handleError(error)
})

/**
 * 若params中无对应的key，则干掉url中的"/{xxx}"
 * @param config
 */
function handleUrl (config) {
    let { url, replaceData } = config
    if (url.indexOf(`{`) === -1) return

    let obj = replaceData || {}
    const keyArr = url.match(/{(\S*?)}/g) // ['{ab}', '{bc}']
    keyArr.forEach(item => {
        const key = item.match(/{(\S*)}/)[1] // 去掉 { } 之后的key
        if (Reflect.has(obj, key)) {
            url = url.replace(item, obj[key])
            Reflect.deleteProperty(obj, key)
        } else {
            url = url.replace(`/${item}`, '')
        }
    })
    config.url = url
}

function handleError (rejectError: RejectError): AxiosPromise {
    const errObj: RejectError = JSON.parse(JSON.stringify(rejectError))
    console.error(errObj)
    const { code, config, message, response } = errObj
    const { baseURL, url, method, timeout } = config

    if (code === 'ECONNABORTED') {
        // notification.error({
        //     message: '请求超时',
        //     description: (h) => {
        //         return h('div', [
        //             h('p', {}, url),
        //             h('p', {
        //                 style: 'color: #f5222d',
        //             }, `该请求超过最大等待时间：${timeout! / 1000}秒`),
        //         ])
        //     },
        // })
    } else if (!isEmptyObj(response)) {
        const { status } = response
        const apiPath = url!.replace(baseURL!, '')
        if (status === 400) {
            // notification.error({
            //     message: '请求失败，错误码：400',
            //     description: (h) => {
            //         return h('div', [
            //             h('p', {}, apiPath),
            //             h('p', {}, 'method：' + method),
            //             h('p', {
            //                 style: 'color: #f5222d',
            //             }, '请检查请求参数是否正确'),
            //         ])
            //     },
            //     duration: undefined,
            // })
        }
    } else {
        // notification.error({
        //     message: message,
        //     description: (h) => {
        //         return h('div', [
        //             h('p', {}, 'url：' + url),
        //             h('p', {}, 'method：' + method),
        //         ])
        //     },
        // })
    }
    return Promise.reject(new Error(message))
}

export default axios
