/**
 * 防抖
 * @param func
 * @param wait  等待时间
 * @param immediate 是否立即执行
 * @returns debounced
 */
export function debounce (func, wait, immediate) {
    let time,
        debounced

    if (typeof func !== 'function') {
        throw new TypeError('Expected a function')
    }
    debounced = () =>{
        let context = this
        let args = arguments
        time && clearTimeout(time)
        if (immediate) {
            let callNow = !time
            callNow && func.apply(context, args)
            time = setTimeout(() => {
                time = null
            }, wait)
        } else {
            time = setTimeout(() => {
                func.apply(context, args)
            }, wait)
        }
    }
    let cancel = function () {
        clearTimeout(time)
        time = null
    }
    return debounced
}

export function getBase64 (img, callback) {
    const reader = new FileReader()
    reader.addEventListener('load', () => callback(reader.result))
    reader.readAsDataURL(img)
}

export function isEmptyObj (obj) {
    for (let key in obj) {
        return false
    }
    return true
}
