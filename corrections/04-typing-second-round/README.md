# Typing second round

## [Enums](https://www.typescriptlang.org/docs/handbook/enums.html)

```ts
enum Color { Red = 1, Green = 2, Blue = 4 }
let c: Color = Color.Green;
```

> ⚠️️ If you don't want to do any computation inside you should use `const enums` that will generate absolutly no code.
> 
> ```ts
> const enum Color { Red = 1, Green = 2, Blue = 4 }
> let c: Color = Color.Green;
> ```

_More information about [enum compilation here](https://www.typescriptlang.org/docs/handbook/enums.html)_

## [Generics](https://www.typescriptlang.org/docs/handbook/generics.html)

Typescript support [Generic class and functions](https://www.typescriptlang.org/docs/handbook/generics.html)

### Generic functions

In languages like C# and Java, one of the main tools in the toolbox for creating reusable components is generics,
that is, being able to create a component that can work over a variety of types rather than a single one.
This allows users to consume these components and use their own types.


Let's do a generic function taking an argument logging it and returning it.

```ts
function logAndReturn<T>(arg: T): T {
    console.log(arg);
    return arg;
}
```

Now let's do a function reversing an array of any kind

```ts
function reverseArray<T>(arg1:T): T {
    return arg1.reverse();
}
```

> ⚔ Will this compile ?
> 
> 1. Yeap
> 2. Nope
> 3. I don't Know


This will not work we need to tell typescript that the argument is not "of any kind" but **an array** of any kind.

```ts
function logLengthAndReturn<T>(arg: T[]): T[] {
    console.log(arg.length);
    return arg;
}
```

### Multiple generic parameters

We can have any number of generic arguments for a function. For example consider the below function.

```ts
function printNumberAlphabets<T1,T2>(arg1:T1[], arg2:T2[]): void {
    arg1.forEach((element, index) => {
        console.log(`${element} is ${arg2[index]}`);
    });
}

printNumberAlphabets([1,2,3], ["one","two","three"]);
```

Here we are passing arrays of integer and strings to the function `printNumberAlphabets`. Since we are printing and not returning anything back, void is the correct type of return. From JavaScript
ES5 `forEach` takes a function with element and index as parameters and iterates over it.

### Generic classes

The generic mecanism can also be applied to classes.

```ts
interface IImage {
    getUrl(): string;
}

class StarWarsImage implements IImage{
    getUrl(): string {
        return "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Star_Wars_Logo.svg/1280px-Star_Wars_Logo.svg.png";
    }
}

class View<T extends IImage> {
    public linkedObject: T;

    constructor(linkedObject: T) {
        this.linkedObject = linkedObject;
    }

    public display() {
        var img = document.createElement("img");
        img.setAttribute("src", this.linkedObject.getUrl())
        document.body.appendChild(img);   
    }
}

new View(new StarWarsImage()).display();
```
[Playground Link](https://goo.gl/DdgtPm)

## [Abstract classes](http://www.typescriptlang.org/docs/handbook/classes.html)

Abstract classes are base classes from which other classes may be derived. They may not be instantiated directly.
Unlike an interface, an abstract class may contain implementation details for its members. The abstract keyword is used
to define abstract classes as well as abstract methods within an abstract class.

```ts
abstract class Spaceship {

    constructor(public name: string) {
    }

    printName(): void {
        console.log("Spaceship name: " + this.name);
    }

    abstract shootLasers(): void; // must be implemented in derived classes
}

class TieFighter extends Spaceship {

    constructor() {
        super("TIE Fighter"); // constructors in derived classes must call super()
    }

    shootLasers(): void {
        console.log("Pew pew pew!!!");
    }

    evilLaugth(): void {
        console.log("Muhahahahaha");
    }
}

let spaceship: Spaceship; // 1
spaceship = new Spaceship(); // 2
spaceship = new TieFighter(); // 3
spaceship.printName(); // 4
spaceship.shootLasers(); // 5
spaceship.evilLaugth(); // 6
```

> ⚔ Will error be raised, if yes where ?
>
> 1. No error raised
> 2. Error raised at **2**
> 3. Error raised at **2** and **6**

[Playground Link](https://goo.gl/Lx3YEX)

**✍ WORKSHOP: Exercice 1**

## [Union Types](https://www.typescriptlang.org/docs/handbook/advanced-types.html)

Union types basically allows you to type a variable saying that the type of this variable can be either `T` or `U` with the syntax: `let a: T | U;`

Union types are a really powerful feature of Typescript but can be a bit tricky to use.
The major uses of them is typing functions that can take several types of parameter as input. Unfortunatly neither ES6 nor Typescript
can overload method with different types of arguments. The usual way to do this looks like this in Typescript:

```ts
/**
 * Takes a string and adds "padding" to the left.
 * If 'padding' is a string, then 'padding' is appended to the left side.
 * If 'padding' is a number, then that number of spaces is added to the left side.
 */
function padLeft(value: string, padding: any) {
    if (typeof padding === "number") {
        return Array(padding + 1).join(" ") + value;
    }
    if (typeof padding === "string") {
        return padding + value;
    }
    throw new Error(`Expected string or number, got '${padding}'.`);
}

padLeft("Hello world", 4); // returns "    Hello world"
```

The issue with this code it that `padding` can be called with something else than a 'number' or a 'string':

```ts
let indentedString = padLeft("Hello world", true);
```

A way to avoid this is Union types:

```ts
function padLeft(value: string, padding: string | number) 
```

[Playground Link](https://goo.gl/NyBl7W)

Also know that, if we have a value that has a union type, we can only access members that are common to all types in the union!

```ts
interface Bird {
    fly();
    layEggs();
}

interface Fish {
    swim();
    layEggs();
}

function getSmallPet(): Fish | Bird {
    // ...
}

let pet = getSmallPet();
pet.layEggs(); // okay
pet.swim();    // errors
```

[Playground Link](https://goo.gl/hfp3Hn)

## [Decorators](https://www.typescriptlang.org/docs/handbook/decorators.html)

A Decorator is a special kind of declaration that can be attached to a `class declaration`,
`method`, `accessor`, `property`, or `parameter`. Decorators use the form @expression, where expression must
evaluate to a function that will be called at runtime with information about the decorated declaration.

This is a really powerfull feature but it can be quite tricky. I won't go too deep into the details
I just want to let you know that it exist and that you can use it. If you want to know more [please refers to the doc](https://www.typescriptlang.org/docs/handbook/decorators.html)

Let's just take the example of the class decorator. The class decorator is applied to the constructor of the class and can be used to observe, modify, or replace a class definition.

If the class decorator returns a value, it will replace the class declaration with the provided constructor function.

> ⚠️️ Should you chose to return a new constructor function, you must take care to maintain the original prototype.
> The logic that applies decorators at runtime will not do this for you.

Let's take an example of a decorator that will log when a class is instanciated.

```ts
@logClass // Class decorator
class Jedi { 

  public name: string;
  public surname: string;

  constructor(name : string, surname : string) { 
    this.name = name;
    this.surname = surname;
  }
}

function logClass(target: any) {
  // save a reference to the original constructor
  var original = target;
 
  // a utility function to generate instances of a class
  function construct(constructor, args) {
    var c : any = function () {
      return constructor.apply(this, args);
    }
    c.prototype = constructor.prototype;
    return new c();
  }
 
  // the new constructor behaviour
  var f : any = function (...args) {
    console.log("New: " + original.name);
    return construct(original, args);
  }
 
  // copy prototype so intanceof operator still works
  f.prototype = original.prototype;
 
  // return new constructor (will override original)
  return f;
}

var p = new Jedi("Anakin", "Skywalker");
var g = new Jedi("Mace", "Windu");

console.log(p);
```

[Playground link](https://goo.gl/fl3Kn3)

> ⚠️️ Decorators is an experimental feature and is subject to change in next releases, you need to enable it with the "experimentalDecorators" option.