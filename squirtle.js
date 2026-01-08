class Pokemon {
    constructor(name, type, hp) {
        this.name = name;
        this.type = type;
        this.hp = hp; // Health Points
        this.moves = []; // An array to store moves
    }

    // Method to learn a new move
    learnMove(moveName, damage, type) {
        this.moves.push({ name: moveName, damage: damage, type: type });
    }

    // Method for battling (simplified)
    attack(targetPokemon, moveName) {
        const move = this.moves.find(m => m.name === moveName);
        if (move) {
            console.log(`${this.name} used ${move.name}!`);
            // Add damage calculation logic here
            // targetPokemon.hp -= calculateDamage(move, targetPokemon.type);
        } else {
            console.log(`${this.name} doesn't know ${moveName}!`);
        }
    }
}
const squirtle = new Pokemon("Squirtle", "Water", 44);
squirtle.learnMove("Tackle", 40, "Normal");
squirtle.learnMove("Water Gun", 40, "Water");

console.log(squirtle);
module.exports = squirtle;