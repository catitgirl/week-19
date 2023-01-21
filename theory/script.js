function bike() {
    console.log(this.name)
}

let name = "ninja"
let obj1 = { name: "pomidor", bike: bike }
let obj2 = { name: "site", bike: bike }

bike()
obj1.bike()
obj2.bike()

//в консоль выведет помидор, потом сайт

class Person {
    constructor(name) {
        this.name = name
    }
}

const member = new Person("John")
console.log(typeof member)

// тут выведет обжэкт


const person = {
    name: "Valera",
    age: 23
}
console.log(person)

//выведет коллекцию свойств, так как мы обратились к объекту person