/**
 * 防抖
 * @param func
 * @param wait  等待时间
 * @param options { leading 是否立即执行 }
 * @returns {debounced}
 */
export function debounce<T extends (...args: any) => any> (func: T, wait: number, options?: any): () => any {
    let lastArgs: IArguments | undefined,
        lastThis: T | undefined,
        maxWait: any | number | undefined,
        result: any,
        timerId: number | undefined,
        lastCallTime: any | number | undefined
    let lastInvokeTime = 0
    let leading = false
    let maxing = false
    let trailing = true

    if (typeof func !== 'function') {
        throw new TypeError('Expected a function')
    }
    wait = wait || 0

    if (options) {
        leading = options.leading
        maxing = 'maxWait' in options
        maxWait = maxing ? Math.max(options.maxWait || 0, wait) : maxWait
        trailing = 'trailing' in options ? options.trailing : trailing
    }

    // 执行用户传入的函数
    function invokeFunc (time: number) {
        let args: any = lastArgs
        let thisArg = lastThis

        lastArgs = lastThis = undefined
        lastInvokeTime = time
        result = func.apply(thisArg, args)
        return result
    }

    // 重置防抖函数最后调用时间，保证wait后接下来的执行。最后判断如果leading是true的话，立即执行用户传入的函数
    function leadingEdge (time: number) {
        lastInvokeTime = time
        timerId = setTimeout(timerExpired, wait)
        return leading ? invokeFunc(time) : result
    }

    // 重新计算剩余时间
    function remainingWait (time: number) {
        let timeSinceLastCall = time - lastCallTime
        let timeSinceLastInvoke = time - lastInvokeTime
        let timeWaiting = wait - timeSinceLastCall

        return maxing
            ? Math.min(timeWaiting, maxWait - timeSinceLastInvoke)
            : timeWaiting
    }

    // 判断函数是否可以执行 maxWait最大等待时间
    function shouldInvoke (time: number) {
        //  lastCallTime初始值是undefined，lastInvokeTime初始值是0，
        //  防抖函数被手动取消后，这两个值会被设为初始值
        let timeSinceLastCall = time - lastCallTime
        let timeSinceLastInvoke = time - lastInvokeTime

        return (lastCallTime === undefined || (timeSinceLastCall >= wait) ||
            (timeSinceLastCall < 0) || (maxing && timeSinceLastInvoke >= maxWait))
    }

    // 判断时间是否符合执行条件，符合的话触发trailingEdge，也就是后续操作，否则计算需要等待的时间，并重新调用这个函数
    function timerExpired () {
        let time = Date.now()
        if (shouldInvoke(time)) {
            return trailingEdge(time)
        }
        // Restart the timer.
        timerId = setTimeout(timerExpired, remainingWait(time))
    }

    // 等待时间到了以后的操作。重置了一些本周期的变量。并且，如果trailing是true而且lastArgs存在时，才会再次执行用户传入的参数
    function trailingEdge (time: number) {
        timerId = undefined

        // Only invoke if we have `lastArgs` which means `func` has been
        // debounced at least once.
        if (trailing && lastArgs) {
            return invokeFunc(time)
        }
        lastArgs = lastThis = undefined
        return result
    }

    function cancel () {
        if (timerId !== undefined) {
            clearTimeout(timerId)
        }
        lastInvokeTime = 0
        lastArgs = lastCallTime = lastThis = timerId = undefined
    }

    function flush () {
        return timerId === undefined ? result : trailingEdge(Date.now())
    }

    function debounced (this: T) {
        let time = Date.now()
        let isInvoking = shouldInvoke(time)

        lastArgs = arguments
        lastThis = this
        lastCallTime = time

        if (isInvoking) {
            if (timerId === undefined) {
                return leadingEdge(lastCallTime)
            }
            if (maxing) {
                timerId = setTimeout(timerExpired, wait)
                return invokeFunc(lastCallTime)
            }
        }
        if (timerId === undefined) {
            timerId = setTimeout(timerExpired, wait)
        }
        return result
    }
    debounced.cancel = cancel
    debounced.flush = flush
    return debounced
}

export function getBase64 (img: Blob, callback: (arg0: string | ArrayBuffer | null) => void): void {
    const reader = new FileReader()
    reader.addEventListener('load', () => callback(reader.result))
    reader.readAsDataURL(img)
}

export function isEmptyObj (obj: any) {
    for (let key in obj) {
        return false
    }
    return true
}
