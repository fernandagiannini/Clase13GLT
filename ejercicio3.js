class Hero {
    constructor (name = 'heroe'){
        this.name = name
        this.ranking = '00'
        this.health = 100
        this.damage = 5
        this. experience = 0
        this.isAlive = true
    }
    talk(nameToSayHi){
        console.log(`Hola ${nameToSayHi}`)
    }
    attack(powerAttack, objetiveHero){
        console.log(`El poder de ataque es ${powerAttack} `)
        objetiveHero.takeDamage(powerAttack)
        if(objetiveHero.isAlive === false){
            this.experience += 10
        }
       
    }
    takeDamage(valueDamage){
        this.health -= valueDamage
        console.log(`El daño recibido es ${valueDamage} y Health ahora es ${this.health}`)
        if(this.health === 0 || this.health < 0) {
            this.isAlive = false
            console.log(this.isAlive)
        }
    }

}

const createHero = (name) => {
    const newHero = new Hero (name)
    return newHero
}

superman = createHero('Superman')
superHijitus = createHero('Super Hijitus')

//esta parte la copie de la explicacion de clase porque no entendia bien la logica, pero si entiendo la sintaxis

while(superman.isAlive && superHijitus.isAlive){    
    superman.attack(10, superHijitus)              
    superHijitus.attack(90, superman)
}

if(superHijitus.isAlive){
    console.log('Super Hijitus ganó')
} else {
    console.log('Superman ganó')
}


