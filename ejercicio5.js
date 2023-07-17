const list1 = [
    {firstName: 'Sofia', country: 'Argentina', continent: 'Americas', age: 35, language: 'Java'},
    {firstName: 'Lukas', country: 'Croatia', continent: 'Europe', age: 35, language: 'Python'},
    {firstName: 'Madison', country: 'United States', continent: 'Americas', age: 32, language: 'Ruby'}
];

const addWelcomeMessage = (array) => {    
    return array.map(element => {
        const message = `'Hi ${element.firstName}, what do you like the most about ${element.language}'`
        return {
        ...element,     
        message
    }
})
}

console.log(addWelcomeMessage(list1))
