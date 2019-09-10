/* eslint disabled */
let ua: string = window.navigator.userAgent;
let isIE: boolean = ("ActiveXObject" in window);
let isChrome: RegExpMatchArray | null = ua.match(/Chrome/i);
let isMobile: boolean = !!(ua.match(/(iPhone|iPad|iPod)/i) || ua.match(/Android/i) || ua.match(/Windows Phone/i) || ua.match(/IEMobile/i));
let IEVersion: string | null = null;
let isIE8: boolean, isIE9: boolean, isIE10: boolean, isIE11: boolean;
isIE8 = isIE9 = isIE10 = isIE11 = false;
let appName = navigator.appName;
if (appName === "Microsoft Internet Explorer" || isIE) {
    let ret = ua.match(/MSIE (\d+[.\d]*)/);
    if (ret) {
        let version = ret[1];
        IEVersion = version;
        let num = parseInt(version, 10);
        isIE8 = num === 8;
        isIE9 = num === 9;
        isIE10 = num === 10;
        isIE11 = num === 11;
    }
}

/**
 * 浏览器环境判断模块
 */
export default {
    isChrome, // 是否Chrome浏览器
    isIE, // 是否IE浏览器
    isMobile, // 是否移动端
    IEVersion,
    isIE8,
    isIE9,
    isIE10,
    isIE11
}
