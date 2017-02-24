# Corrections

## Basic class implementation

```ts
interface IHuman {
    name: string;
    describe(): void; // console.log the animal name and it's name in a sentence
}

class Human implements IHuman {
    public name: string;

    constructor(name: string) {
        this.name = name;
    }

    public describe() {
        console.log(`My name is ${this.name}!`);
    }

    public static describeAll(humans: IHuman[]) {
        humans.forEach(h => h.describe());
    }
}

class Sith extends Human {
    constructor(name: string){
        super(name);
    }

    public describe() {
        super.describe();
        console.log("and I'm on the Dark side of the force");
    }
}

var freddieMercury: IHuman = new Human('Freddie Mercury');
var obiWan: IHuman = new Human('Obi-Wan');
var darthSidious: IHuman = new Sith('Darth Sidious');

Human.describeAll([freddieMercury, obiWan, darthSidious]);
```