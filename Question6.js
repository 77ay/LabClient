setTimeout(() => {
    console.log("done")
}, 10000);

let CurriedAdd = x => y => x+y
console.log(CurriedAdd(2)(3))

let sum3 = x => y => z => x+y+z
console.log(sum3(1)(2)(3))
