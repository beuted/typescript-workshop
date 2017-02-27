# Workshop - Let's Type

* [Use the Typescript playgound to play around](https://www.typescriptlang.org/play)
* Have a look at the [typescript doc](https://www.typescriptlang.org/docs) when doing these exsercises.

## Basic class implementation

```ts
interface IHuman {
    name: string;
    describe(): void; // console.log the human name in a sentence
}

var freddieMercury: IHuman;
var obiWan: IHuman;
var darthSidious: IHuman;

freddieMercury.describe();
obiWan.describe();
darthSidious.describe();
```

1. Add a classes `Human` that will implement the `IHuman` interface.

> console should display:
> 
> ```
> My name is Freddie Mercury
> My name is Obi-Wan
> My name is Darth Sidious
> ```

2. Create a static function on `Human` named `describeAll` function that take an array of `IHuman` and log all the desciptions at once.

> console should display the same thing.

3. Create a `Sith` class extending the `Human` class that override the `describe` function adding _"and I'm on the dark side of the force"_ at the end of the sentence.

> console should display:
> 
> ```
> My name is Freddie Mercury
> My name is Obi-Wan
> My name is Darth Sidious
> and I'm on the Dark side of the force
> ```