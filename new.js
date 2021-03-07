class Person {
    constructor(firstName,lastName, salary) {
            this.firstName = firstName;
            this.lastName = lastName;
            this.salary = salary;
    }
}
const heroPerson = new Person ('Hero', 'kuddus', 25000)
console.log(heroPerson);
const friendlyPerson = new Person ('hero', 'abu', 20000);
console.log(friendlyPerson);

// function Person1(firstName, lastName, salary) {      //--> Old method to write a class;
//     this.firstName = firstName;
//     this. lastName = lastName;
//     this.salary = salary;
// }
// const oldPerson = new Person1('grand','parent', 12000);
// console.log(oldPerson);