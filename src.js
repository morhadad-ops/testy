const a =  42;
console.log(a + " is the real answer.");
export { a };

const b = "Hello, World!";
console.log(b);
export { b };

function greet(name) {
    return `Hello, ${name}!`;
}
console.log(greet("Alice"));
export { greet };

class Person {
    constructor(name) {
        this.name = name;
    }


    introduce() {        
        return `Hi, I'm ${this.name}.`;
    }
}
const john = new Person("John");
console.log(john.introduce());
export { Person };  