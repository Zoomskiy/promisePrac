// let promise3 = doAfter(3);
// setTimeout(() => {
//     promise3.then(() => {
//         console.log("promise3 зарезорвился")
//     },1000)
// })
// let pr = new Promise((resolve) => {
//     let i = 0;
//   return   setInterval(() => {
//         i++;
//         resolve(i)
//     },5000)
// })
let pr = doAfter(3)
    .then(() => {
        console.log("Мой промис зарезолвился")
        return "it's return"
    })
    .then((name) => {
        console.log("Этим зарезолвился мой промис: " + name)
    })
