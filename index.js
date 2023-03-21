//SUPER CLASS
function Sport(name, netWorth) {
    this.name = name;
    this.netWorth = netWorth;
}
//Prototype of Super Class
console.log(Object.getPrototypeOf(Sport));

let messi = new Sport("Lionel Messi", "2.5 Billion USD");
console.log(messi);
console.log(Object.getPrototypeOf(messi));

//A new constructor, that takes up properties from the SuperClass Constructor, SPORT
function Tennis(stats, wins, losses) {
    //Call to constructor   
    Sport.call(this, name, netWorth);
    this.stats = stats;
    this.wins = wins;
    this.losses = losses;
}

function FootBall(stats, wins, losses, agility) {
    Tennis.call(this, stats, wins, losses);
    this.agility = agility;
}

Tennis.prototype.tplayer = function () {
    return '${this.name} has a rating of ${this.stats}';
}