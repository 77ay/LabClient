function add(x){
	return function(y){
		return x+y;
	}
}
console.log(add(2)(3))

function adds(x,y){
	return x+y;
}

console.log( adds(2,3) )