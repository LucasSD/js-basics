function Player(name) {
    this.name = name;
    this.lvl = 1;
    this.points = 0;
}

Player.prototype.gainXp = function(amountXp) {
    if (amountXp < 1 || amountXp > 10) {
        throw new Error('Points must be between 1 and 10');
    }
    this.points += amountXp;
    if (this.points >= 10) {
        this.lvl ++
        this.points -= 10
    }
};

Player.prototype.describe = function() {
    return `${this.name} is level ${this.lvl} with ${this.points} experience points`
};

if (typeof module !== "undefined" && module.exports) {
    module.exports = Player
}

let player1 = new Player('Bob');
let player2 = new Player('Alice');
console.log(player1)