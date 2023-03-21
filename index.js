//SUPER CLASS
function Sport(playername, netWorth, wins, losses) {
    this.playername = playername;
    this.netWorth = netWorth;
    this.wins = wins;
    this.losses = losses;
}
//Prototype of Super Class
console.log(Object.getPrototypeOf(Sport));

let messi = new Sport("Lionel Messi", "2.5 Billion USD");
console.log(messi);
console.log(Object.getPrototypeOf(messi));

//A new constructor, that takes up properties from the SuperClass Constructor, SPORT
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
console.log(roger.tplayer());
console.log(ronaldo.fplayer());