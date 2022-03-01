// function sayMyName(name) {
//     console.log(`My Name is ${name}`)
// }

// sayMyName("Walter White")
// sayMyName("Heisenberg")

const person = {
    name: "Vishwas",
    sayMyName: function () {
        console.log(`My name is ${this.name}`)
    }
}

// person.sayMyName()
// const name = "Superman"
globalThis.name = "Superman"
function sayMyName() {
    console.log(`My name is ${this.name}`)
}

// sayMyName.call(person)

function Person(name) {
    // this={}
    this.name = name
}

const p1 = new Person("Vishwas")
const p2 = new Person("Batman")

console.log(p1.name, p2.name)

sayMyName()