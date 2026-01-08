class pokemon {
    constructor(name, type) {
        this.name = name;
        this.type = type;
    }

    getInfo() {
        return `${this.name} is a ${this.type} type Pokemon.`;
    }
}

const pikachu = new pokemon("Pikachu", "Electric");
console.log(pikachu.getInfo());
module.exports = pikachu;