const list = [
    {firstName: 'Noa', country: 'Switzerland', continent: 'Europe', age: 19, language: 'Javascript'},
    {firstName: 'Carla', country: 'Tahiti', continent: 'Oceania', age: 28, language: 'Javascript'},
    {firstName: 'Maria', country: 'Taiwan', continent: 'Asia', age: 35, language: 'HTML'},
    {firstName: 'Ramiro', country: 'Tajikistan', continent: 'Asia', age: 30, language: 'CSS'}
];

const quantityPersonsByContinent = (array, continent) => {
    const people = array.filter(person => person.continent === continent)
    return people.length
}

console.log(quantityPersonsByContinent(list, 'Asia'))