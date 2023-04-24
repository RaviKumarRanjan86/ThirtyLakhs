// we want that is in person country is India then only add the object city: Delhi

const country='India'

const person = {
name : 'Ravi',
country : 'Inda',
...(this.country === 'India' ? {city : "Delhi"} : {}) 
}

console.log(person);