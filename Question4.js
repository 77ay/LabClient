function sum3(x){
    return function(y){
        return function(z){
            return x+y+z;
        }
    }
}
console.log(sum3(2)(3)(6))