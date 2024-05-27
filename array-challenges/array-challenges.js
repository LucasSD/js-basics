const capitalize = require('../capitalize-challenge/capitalize');

const people = [
    {
        firstName: 'John',
        lastName: 'Doe',
        email: 'john@gmail.com',
        phone: '111-111-1111',
        age: 30,
    },
    {
        firstName: 'Jane',
        lastName: 'Poe',
        email: 'jane@gmail.com',
        phone: '222-222-2222',
        age: 25,
    },
    {
        firstName: 'Bob',
        lastName: 'Foe',
        email: 'bob@gmail.com',
        phone: '333-333-3333',
        age: 45,
    },
    {
        firstName: 'Sara',
        lastName: 'Soe',
        email: 'Sara@gmail.com',
        phone: '444-444-4444',
        age: 19,
    },
    {
        firstName: 'Jose',
        lastName: 'Koe',
        email: 'jose@gmail.com',
        phone: '555-555-5555',
        age: 23,
    },
];

const youngPeople = people.filter((person) => person.age < 26 ).map((youngPerson) => ({name: `${youngPerson.firstName} ${youngPerson.lastName}`, email: youngPerson.email}) )

// function createYoungPeopleArray(arr) {
//     return arr.filter((person) => person.age < 26 ).map((youngPerson) => ({name: `${youngPerson.firstName} ${youngPerson.lastName}`, email: youngPerson.email}) )
// }

const createYoungPeopleArray = arr => arr.filter((person) => person.age < 26 ).map((youngPerson) => ({name: `${youngPerson.firstName} ${youngPerson.lastName}`, email: youngPerson.email}) )

console.log(createYoungPeopleArray(
    people
))

const positiveSum = arr => arr.filter((num) => num > 0).reduce((acc, posNum) => acc + posNum, 0)

const capitalizeWordsInArray = arr => arr.map((word) => capitalize(word))

console.log(positiveSum([2, -30, 50, 20, -12, -9, 7]))

if (typeof module !== "undefined" && module.exports) {
    module.exports = {people, createYoungPeopleArray, positiveSum, capitalizeWordsInArray};
}