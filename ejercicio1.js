class Hero {
    constructor (name = 'heroe', ranking, health, damage, experience){
        this.name = name
        this.ranking = ranking
        this.health = health
        this.damage = damage
        this. experience = experience
    }
}

const createHero = (name, ranking, health, damage, experience) => {
    const newHero = new Hero (name, ranking, health, damage, experience)
    return newHero
}

superman = createHero('Superman', '00', 100, 5, 0)
console.log(superman)