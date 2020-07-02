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