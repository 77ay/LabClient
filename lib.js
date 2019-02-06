module.exports.mulTable = (num) => {
    let result
    var nums = parseInt(num)
    for(var i=1; i<= 12; i++){
        if(nums>0){
            result = nums*i
        }
        else{
            console.log('Input is not number')
        }
        console.log(nums+'x'+i+'='+result)
    }
}

module.exports.TriArea = (base,high) => {
    console.log('Triangel Area Calculator')
    let resultTri
    resultTri = base * high * 0.5
    console.log('Area : '+resultTri)
}

module.exports.CubicVolume = (wid,len,high,) => {
    console.log('Cubic Volume Calculator')
    let volume
    volume = wid*len*high
    console.log('Volume : '+volume+' Cubic')
}