person = {
	name: 'Bob',
	age: 45,
	birthday:{
		day: 5,
		month: 11,
		year: 1900
	},
    max:{
        description : "Find Max",
        fmax: (x,y) => {
			if (x > y)
				return x
			else
				return y
        }
    }
}

console.log(person.max.description)
console.log(person.max.fmax(9,1))