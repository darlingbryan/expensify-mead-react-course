// const person = {
//     name: 'Andrew',
//     age: 26,
//     location: {
//         city: 'Philly',
//         temp: 92
//     }
// }

// const { name, age } = person

// console.log(`${name} is ${age}`)

// const { city, temp: temperature } = person.location

// console.log(`It is ${temperature} degrees in ${city}`)

// const book = {
//     title: 'Ego is the Enemy',
//     author: 'A a',
//     publisher: {
//         name: 'Penguin'
//     }
// }

// const { name: publisherName = 'Self-published'} = book.publisher

// console.log(publisherName)

const item = [ 'Kape (Mainit)' , 'P10', 'P20', 'P25' ]

const [description, , medium] = item

console.log(`${description} is ${medium}`)