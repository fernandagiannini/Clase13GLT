class Hero {
    constructor (name = 'heroe', ranking, health, damage, experience){
        this.name = name
        this.ranking = ranking
        this.health = health
        this.damage = damage
        this. experience = experience
    }
    talk(nameToSayHi){
        console.log(`Hola ${nameToSayHi}`)
    }
    attack(powerAttack){
        this.experience = this.experience + 10
        console.log(`El poder de ataque es ${powerAttack} y la Experience ahora es ${this.experience}`)
    }
    takeDamage(valueDamage){
        this.health = this.health - valueDamage
        console.log(`El daño recibido es ${valueDamage} y Health ahora es ${this.health}`)
    }

}

const createHero = (name, ranking, health, damage, experience) => {
    const newHero = new Hero (name, ranking, health, damage, experience)
    return newHero
}

superman = createHero('Superman', '00', 100, 5, 0)
console.log(superman)

const NAME_TO_SAY_HI = 'Fer'
superman.talk(NAME_TO_SAY_HI)

const POWER_ATTACK = 30
superman.attack(POWER_ATTACK)

const VALUE_DAMAGE = 25
superman.takeDamage(VALUE_DAMAGE)
