class Milky {
    constructor() {
        this.type = 'Milky';
        this.flavor = 'chocolate';
        this.topings = ['whipped cream', 'chocolate chips'];
        this.price = 4.99;
    }

    getDetails() {
        return `Type: ${this.type}, Flavor: ${this.flavor}, Toppings: ${this.topings.join(', ')}, Price: $${this.price}`;
    }
}

console.log(new Milky().getDetails());