// function Person(fName, lName) {
//     this.firstName = fName
//     this.lastName = lName
// }

// const person1 = new Person("Bruce", "Wayne")
// const person2 = new Person("Clark", "Kent")

// Person.prototype.getFullName = function () {
//     return this.firstName + " " + this.lastName
// }

// console.log(person1.getFullName())
// console.log(person2.getFullName())

// function SuperHero(fName, lName) {
//     Person.call(this, fName, lName)
//     this.isSuperHero = true
// }
// SuperHero.prototype.fightCrime = function () {
//     console.log("Fighting crime")
// }
// SuperHero.prototype = Object.create(Person.prototype)

// const batman = new SuperHero("Bruce", "Wayne")
// console.log(batman.getFullName())

class Person {
    constructor(fName, lName) {
        this.firstName = fName
        this.lastName = lName
    }
    sayMyName() {
        return this.firstName + " " + this.lastName
    }
}

class SuperHero extends Person {
    constructor(fName, lName) {
        super(fName, lName)
        this.isSuperHero = true
    }
    fightCrime() {
        console.log("Fighting crime")
    }
}
const batman = new SuperHero("Bruce", "Wayne")
console.log(batman.sayMyName());