person = {
	name: 'Bob',
	age: 45,
	birthday:{
		day: 5,
		month: 11,
		year: 1900
	},
	max: function(x,y){
			if (x > y)
				return x
			else
				return y
		}
}

console.log(person.max(9,1))