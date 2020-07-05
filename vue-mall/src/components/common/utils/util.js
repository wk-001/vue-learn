//防抖函数，在单位时间内只发送一次请求，参数1：要执行的函数，参数2：单位时间
export function debounce(func,delay){
    let timer = null
    return function (...args) {
        //如果timer有值，清除之前设置的timer 重新设置时间
        if (timer){
            clearTimeout(timer)
        }

        timer = setTimeout(()=>{
            //执行函数，传入参数
            func.apply(this,args)
        },delay)
    }
}

//时间戳转成指定格式的时间
export function formatDate(date, fmt) {
    if (/(y+)/.test(fmt)) {
        fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length));
    }
    let o = {
        'M+': date.getMonth() + 1,
        'd+': date.getDate(),
        'h+': date.getHours(),
        'm+': date.getMinutes(),
        's+': date.getSeconds()
    };
    for (let k in o) {
        if (new RegExp(`(${k})`).test(fmt)) {
            let str = o[k] + '';
            fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? str : padLeftZero(str));
        }
    }
    return fmt;
};

function padLeftZero (str) {
    return ('00' + str).substr(str.length);
};

