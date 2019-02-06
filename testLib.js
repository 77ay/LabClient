let mod = require('./lib.js')
let stdin = process.openStdin()

/*
console.log('Multiple Table Please Enter number >> ')
process.stdin.on('data', (data) => {
    var num = parseInt(data)
    console.log(mod.mulTable(num))
})
*/

/*
console.log('Please Enter Base >> ')
let count = 0
var base,high
stdin.addListener('data', (data) => {
    if(count == 0){
        base = data
        console.log('Please Enter High >> ')
    }
    else{
        high = data
        mod.TriArea(+base,+high)
        stdin.destroy()
    }
    count++
})
*/

console.log('Please Enter Width >> ')
let count = 0
var wid,len,high
stdin.addListener('data', (data) => {
    if(count == 0){
        wid = data
        console.log('Please Enter Length >> ')
    }
    else if(count == 1){
        len = data
        console.log('Please Enter Hight >>')
    }
    else{
        high = data
        mod.CubicVolume(+wid,len,+high)
        stdin.destroy()
    }
    count++
})