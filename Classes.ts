// class Animal {
//     name: string;
//     constructor(theName: string) { this.name = theName; }
//     move(distanceInMeters: number = 0) {
//         console.log(`${this.name} moved ${distanceInMeters}m.`);
//     }
// }

// class Snake extends Animal {
//     constructor(name: string) { super(name); }
//     move(distanceInMeters = 5) {
//         console.log("Slithering...");
//         super.move(distanceInMeters);
//     }
// }

// class Horse extends Animal {
//     constructor(name: string) { super(name); }
//     move(distanceInMeters = 45) {
//         console.log("Galloping...");
//         super.move(distanceInMeters);
//     }
// }

// let sam = new Snake("Sammy the Python");
// let tom: Animal = new Horse("Tommy the Palomino");

// sam.move();
// tom.move();

//////////////////////////////////////////////////////////

class someClass {
    someNumber: number = 6;
    someElement: Element;
    constructor(param: Element) {
        this.someElement = param;
    }
    someMethod() {
        this.someNumber = 5;
    }

    get GetMethod() {
        return this.someNumber;
    }

    set SetMethod(param) {
        this.someNumber = param;
    }
}

class ExtendedClass extends someClass {
    constructor(param: Element) {
        super(param);
    }

    someOtherMethod() {
        this.someNumber;
    }
}

let thisElement = document.createElement('div');
let instanceOfSomeClass = new someClass(thisElement);

instanceOfSomeClass.someNumber;

