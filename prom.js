// let myPromise2 = new Promise((resolve) => {
//
//     resolve(Math.random())
// })
// myPromise2
//     .then( number => {
//         console.log("Uznal: " + number)
//     })

const doAfter = (seconds) => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(seconds)
        }, Math.floor(seconds * 1000))

    })
}
// doAfter(5).then(() => {
//     console.log("Я сработал через 5 секунд")
// })
// doAfter(3).then(() => {
//     console.log("Я сработал через 3 секунд")
// })
// doAfter(6).then(() => {
//     console.log("Я сработал через 6 секунд")
// })
