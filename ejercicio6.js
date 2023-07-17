const list1 = [
    {firstName: 'Sofia', country: 'Argentina', continent: 'Americas', age: 35, language: 'Java'},
    {firstName: 'Lukas', country: 'Croatia', continent: 'Europe', age: 35, language: 'Python'},
    {firstName: 'Madison', country: 'United States', continent: 'Americas', age: 32, language: 'Ruby'}
];


const findLanguage = (array, language1) =>{
        const aux = array.filter(element => element.language === language1)
        let existLanguaje = false
        if(aux.length > 0){ existLanguaje = true}
        return existLanguaje
    }


console.log(findLanguage(list1, 'Ruby'))

//consigna:
//return ('Ruby') => true