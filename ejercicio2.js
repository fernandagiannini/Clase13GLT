class Hero {
    constructor (name = 'heroe'){
        this.name = name
        this.ranking = '00'
        this.health = 100
        this.damage = 5
        this. experience = 0
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

const createHero = (name) => {
    const newHero = new Hero (name)
    return newHero
}

superman = createHero('Superman')
console.log(superman)

const NAME_TO_SAY_HI = 'Fer'
superman.talk(NAME_TO_SAY_HI)

const POWER_ATTACK = 30
superman.attack(POWER_ATTACK)

const VALUE_DAMAGE = 25
superman.takeDamage(VALUE_DAMAGE)
