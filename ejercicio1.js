class Hero {
    constructor (name = 'heroe'){
        this.name = name
        this.ranking = '00'
        this.health = 100
        this.damage = 5
        this. experience = 0
    }
}

const createHero = (name) => {
    const newHero = new Hero (name)
    return newHero
}

superman = createHero('Superman')
console.log(superman)