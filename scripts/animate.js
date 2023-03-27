export const animator = (callback, cutoff, ms = -1, arr = []) =>  new Promise((resolve) => {
    let i = 0
    let timer = setInterval(() => {
        if(i == cutoff){
            clearInterval(timer)
            resolve()
        } else {
            callback(i)
            i += 1
        }
    }, (ms > 0) ? ms : i)
})