/*
 * @Author: hejp
 * @Date:   11:10
 * @Last Modified by:   hejp
 * @Last Modified time: 11:10
 */
/**
 * 获取参数值
 * @param name
 * @returns {any}
 */
export function getUrl (name) {
    let reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)')
    let result = window.location.href.split('?').length > 1 && window.location.href.split('?')[1].match(reg)
    return result ? decodeURIComponent(result[2]) : null
}

/**
 *格式化日期
 * @param date
 * @param fmt
 * @returns {*}
 */
export function fmtDate (date, fmt) {
    var o = {
        'M+': date.getMonth() + 1,
        'd+': date.getDate(),
        'h+': date.getHours(),
        'm+': date.getMinutes(),
        's+': date.getSeconds(),
        'q+': Math.floor((date.getMonth() + 3) / 3),
        'S': date.getMilliseconds()
    }
    if (/(y+)/.test(fmt)) {
        fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length))
    }
    for (var k in o) {
        if (new RegExp('(' + k + ')').test(fmt)) {
            fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? (o[k]) : (('00' + o[k]).substr(('' + o[k]).length)))
        }
    }
    return fmt
}
/**
 * 通过url,判断是属于那个平台
 * @param url
 * @returns {Function}
 */
export function getPlatform (url) {
    let platforms = ['bdsp', 'dws', 'development'],
        arr = ['dataAcceptance', 'dataWarehouse', 'dataDevelopment'],
        platform = '';
    platforms.map((item, index) => {
        if (url.indexOf(item) !== -1) {
            platform = arr[index];
        }
        return item;
    });
    return platform
}

/**
 * 深拷贝
 * @param obj
 */
export function cloneDeep (obj = {}) {
    let result;
    // 判断是否是object类型
    if (typeof obj !== 'object') {
        return obj
    }
    // 判断是否是数组
    if (obj instanceof Array) {
        result = []
    } else {
        result = {}
    }
    for (let key in obj) {
        // 判断是否是自身的属性
        if (obj.hasOwnProperty(key)) {
            // 判断obj[key]是否存在，是否是object类型，是否是正则
            if (obj[key] && typeof obj[key] === 'object' && obj[key].constructor !== RegExp) {
                result[key] = cloneDeep(obj[key])
            } else {
                result[key] = obj[key]
            }
        }
    }
    return result
}
