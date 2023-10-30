class Warrior {
    constructor(tribu, life, power){
        this.tribu = tribu //añadido para poder saber después si es Maya o Azteca
        this.life = life
        this.power = power
    }

    attack = () => {
        console.log(`${this.tribu} ataca, tiene poder ${this.power}`);
    }
    defend = (damage) =>{
        console.log(`${this.tribu} se defiende, le quedan ${this.life - damage} puntos de vida`);
    } 
}
const Warrior1 = new Warrior('Maya', 100, 30)
Warrior1.attack()
Warrior1.defend(40)

class Maya extends Warrior{
    constructor(tribu, life, power){
        super(tribu, life, power)
    }

    drinkColaCao = () => {
        this.power += 10
        console.log(`${this.tribu} bebe Cola-Cao, su poder aumenta a ${this.power}`);
    }
}
const Maya1 = new Maya('Maya', 200, 50)
// Maya1.drinkColaCao()
// console.log(Maya1.power);

class Aztec extends Warrior{
    constructor(tribu, life, power){
        super(tribu, life, power)
    }

    drinkNesquik = () => {
        this.life += 10
        console.log(`${this.tribu} bebe Nesquik, su vida aumenta a ${this.life}`);
    }
}
const Aztec1 = new Aztec('Azteca', 150, 60)
// Aztec1.drinkNesquik()
// console.log(Aztec1.life);

Aztec1.drinkNesquik()
Maya1.drinkColaCao()
Maya1.attack()
Aztec1.defend(30)
Aztec1.attack()
Maya1.defend(40)