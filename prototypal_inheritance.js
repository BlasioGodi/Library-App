//Super Class Constructor
function Sport(playername, networth) {
    this.playername = playername;
    this.networth = networth;

}

Sport.prototype.greet = function () {
    return `${this.playername} says hello!!`;
}

//Prototype of Super Class
console.log("Before: ", Object.getPrototypeOf(Sport));

let messi = new Sport("Lionel Messi", "2.5 Billion USD");
console.log(messi);
console.log(Object.getPrototypeOf(messi));

//Prototype of Super Class
console.log("After: ", Object.getPrototypeOf(Sport));

//Sub-class Constructors that take properties of Superclass Constructor
function Tennis(playername, weight) {
    //Call to constructor   
    Sport.call(this, playername);
    this.weight = weight;
}

function FootBall(playername, agility) {
    //Call to constructor   
    Sport.call(this, playername);
    this.agility = agility;
}

//String Interpolation within BACKTICKS
Tennis.prototype.tplayer = function () {
    return `${this.playername} has a weight of ${this.weight}`;
}

FootBall.prototype.fplayer = function () {
    return `${this.playername} has an agility of a ${this.agility}`;
}

const roger = new Tennis("Roger Federer", "75kgs");
const ronaldo = new FootBall("Cristiano Ronaldo", "Monkey");

// //Attempting to access methods up the prototype chain. Uncomment to test this
// console.log(ronaldo.greet());
// console.log(roger.greet());

//Setting properties of Sub-class constructor to inherit the Super-class constructor
Object.setPrototypeOf(Tennis.prototype, Sport.prototype);
Object.setPrototypeOf(FootBall.prototype, Sport.prototype);

Sport.prototype.greet = function () {
    return `${this.playername} says hello!!`;
}

//Method output of Sub-class Constructors
console.log(roger.tplayer());
console.log(ronaldo.fplayer());

//Method output of Super-class Constructor
console.log(ronaldo.greet());
console.log(roger.greet());
