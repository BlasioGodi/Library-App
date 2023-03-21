function heros(name, country) {
    this.name = name;
    this.country = country;
}

let superMan = new heros("Superman", "America");

console.log(Object.getPrototypeOf(heros));
console.log(Object.getPrototypeOf(superMan));