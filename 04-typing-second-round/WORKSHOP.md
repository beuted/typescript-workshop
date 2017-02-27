# Typing second round

* [Use the Typescript playgound to play around](https://www.typescriptlang.org/play)
* Have a look at the [typescript doc](https://www.typescriptlang.org/docs) when doing these exsercises.

## 2. Abstract & Generic classes

```ts
abstract class Human {
    constructor(public name: string) {}
    abstract laught(): void;
}

// Implement Jedi and Sith Classes here

// Implements HumanCollection<T> here

let sithCollection = new HumanCollection<Sith>();
sithCollection.push(new Sith("Darth Vader"));
sithCollection.push(new Sith("Darth Sidious"));

sithCollection.triggerLaughts();

let jediCollection = new HumanCollection<Jedi>();
jediCollection.push(new Jedi("Yoda"));
jediCollection.push(new Jedi("Obi-Wan Kenobi"));

jediCollection.triggerLaughts();
```

[Playground Link](https://goo.gl/77Rpjb)

1. implement a `Jedi` and a `Sith` class extending the abstract class `Human`. The laught function should log: `[the name of the Jedi]:hihihi` for Jedis,
and  `[the name of the Sith]:MUAHAHAHA` for Siths.
2. Implement HumanCollection<T> with a `push` function and a `triggerLaughts` one calling the laught function of all the Humans inside the class.