# Typing second round

```ts
abstract class Human {
    constructor(public name: string) {}
    abstract laught(): void;
}

class Jedi extends Human {
    public laught() {
        console.log(`${this.name}: hihihi`);
    }
}

class Sith extends Human {
    public laught() {
        console.log(`${this.name}: MUHAHAHAHA`);
    }
}

class HumanCollection<T extends Human> {
    private collection: T[] = [];

    public push(human: T) {
        this.collection.push(human)
    }

    public triggerLaughts() {
        this.collection.forEach(h => h.laught())
    }
}

let sithCollection = new HumanCollection<Sith>();
sithCollection.push(new Sith("Darth Vader"));
sithCollection.push(new Sith("Darth Sidious"));

sithCollection.triggerLaughts();

let jediCollection = new HumanCollection<Jedi>();
jediCollection.push(new Jedi("Yoda"));
jediCollection.push(new Jedi("Obi-Wan Kenobi"));

jediCollection.triggerLaughts();
```