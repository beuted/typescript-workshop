# Let's type

We're going to have quick overview of the type system.

> You can have a look at the typescript doc on [Basic Types](https://www.typescriptlang.org/docs/handbook/basic-types.html) and [Advanced Types](https://www.typescriptlang.org/docs/handbook/advanced-types.html)

## Syntax

TypeScript uses postfix type annotations (like scala does) for typing `method returns` and `arguments`, `class properties` etc...
It looks like this:

```ts
function pushNumberToArray(arr: number[], num: number): void {
  arr.push(num);
}

function arrayLengthStr(arr: any[]): string {
  return `The size of this array is ${arr.length}!`;
}

let awesomeArray: number[] = [1, 2];
console.log(arrayLengthStr(awesomeArray));
pushNumberToArray(awesomeArray, 3);
console.log(arrayLengthStr(awesomeArray));
pushNumberToArray(awesomeArray, "hey"); // This will raise an error at compilation!
```

[Playground Link](https://goo.gl/D2h9Ml)

## Basic Types

TypeScript exposes the JavaScript primitives, as well as a couple of extra types that we are going to see in the next examples.

* `string` - the type is a primitive JavaScript string. E.g. `"hello"`.
* `number` - the type is a primitive JavaScript number. E.g. `10`.
* `boolean` - the type is a primitive JavaScript boolean. E.g. `true`.
* `any` - the type is _anything_.
* `any[]` - the type is an array of `any`.
* `void` - no type, effectively `undefined`.
* `() => any` - the type is a function that returns `any`.


## [Type Inferencing](https://www.typescriptlang.org/docs/handbook/type-inference.html)

Type Inferencing is used when the type is not provided explicitly. For instance, using `var x = 10`, TypeScript can infer that `x` is a number.

So if we take the previous example there is a lot of types we can safely remove.

```ts
function pushNumberToArray(arr: number[], num: number)/*: void*/ {
  arr.push(num);
}

function arrayLengthStr(arr: any[])/*: string*/ {
  return `The size of this array is ${arr.length}!`;
}

let awesomeArray/*: number[]*/ = [1, 2];
console.log(arrayLengthStr(awesomeArray));
pushNumberToArray(awesomeArray, 3);
console.log(arrayLengthStr(awesomeArray));
pushNumberToArray(awesomeArray, 'hey'); // This will raise an error at compilation!
```

> Can I safely remove:
> 
> 1. number[]
> 2. number
> 3. any[]

## Type assertion

```ts
let someValue: any = "this is a string";
let strLength: number = (<string>someValue).length;
```

[Playground Link](https://www.typescriptlang.org/play/#src=let%20someValue%3A%20any%20%3D%20%22this%20is%20a%20string%22%3B%0D%0Alet%20strLength%3A%20number%20%3D%20(%3Cstring%3EsomeValue).length%3B%20)

```ts
let someValue: any = 1;
let strLength: number = (<string>someValue).length;
```

> Will this raise an Error...
> 
> 1. ... At compilation time
> 2. ... At execution time
> 3. No error will be raised

Type assertion is a sort of casting that performs no special checking or restructuring of data. It is a way to tell the compilator "trust me, I know what I’m doing.".

> ⚠️️ `<any>something` can be handy to handle non-typed or wrongly-typed external libs but beware, doing this you might end-up with runtime error that could have been caught at compilation time.

## [Classes](https://www.typescriptlang.org/docs/handbook/classes.html)

Forget the old prototype-based inheritance, since ES2015 JavaScript has object-oriented class-based approach.
TypeScript allows developers to use these techniques now, and compile them down to JavaScript that works across all major browsers.
TypeScript also add `private`/`public`/`protected` modifiers as well as the `readonly/static` modifier, and deeper object-oriented concepts.

```ts
class Greeter {
    private readonly name: string;

    constructor(name: string) {
        this.name = name;
    }

    public greet() {
        return "Hello, " + this.name;
    }

    public static Greet(name: string) {
         return "Hello, " + name;
    }
}

let greeter = new Greeter("world");
```

[Playground Link](https://goo.gl/TBn297)

> ⚠️️ properties and method on classes are _**Public by default**_

> ⚠️️ Private properties and method are theorically not accessible from outside the class _**but they will still be present on the javascript object**_

## [Interfaces](https://www.typescriptlang.org/docs/handbook/interfaces.html)

With Interfaces you can type anything more complicated than our basic types, including functions and classes. The syntax is very close to JavaScript object.

```ts
interface IPoint {
  x: number,
  y: number,
  move(p: IPoint): void
}

let origin: IPoint = {
    x: 0,
    y: 0,
    move: function (point: IPoint) { this.x += point.x; this.y += point.y; }
};

class Point implements IPoint {
    public x: number;
    public y: number;
    public move(point: IPoint) {
        this.x += point.x;
        this.y += point.y;
    }
}
```

[Playground Link](https://goo.gl/CHesW1)

You can also type dictionnaries with Interfaces

```ts
interface IMyDictionary {
  [index: string]: number
}

let dico: IMyDictionary = { "One": 1, "Two": 2, "Three": 3 };
```


## Inheritance

TypeScript supports an inheritance model (similar to object-oriented languages):

```ts
class Animal {
    protected readonly name: string;

    constructor(theName: string) { this.name = theName; }
    move(distanceInMeters: number = 0) {
        console.log(`${this.name} moved ${distanceInMeters}m.`);
    }
}

class Snake extends Animal {
    constructor(name: string) { super(name); }
    move(distanceInMeters = 5) {
        console.log("Slithering...");
        super.move(distanceInMeters);
    }
}

class Horse extends Animal {
    constructor(name: string) { super(name); }
    move(distanceInMeters = 45) {
        console.log("Galloping...");
        super.move(distanceInMeters);
    }
}

let sam = new Snake("Sammy the Python");
let tom: Animal = new Horse("Tommy the Palomino");

sam.move();
tom.move(34);
```

[Playground Link](https://goo.gl/pXqLUT)

Derived classes that contains constructor functions must call super() which will execute the constructor function
on the base class.

The example also shows how to override methods in the base class with methods that are specialized for the
subclass. Here both `Snake` and `Horse` create a `move` method that overrides the `move` from `Animal`, giving
it functionality specific to each class. Note that even though `tom` is declared as an Animal, since its value is
a `Horse`, when `tom.move(34)` calls the overriding method in `Horse`:

> What will it return ?
> 
> 1.
> ```
> Sammy the Python moved 5m.
> Slithering...
> Tommy the Palomino moved 34m.
> Galloping...
> ```
> 2.
> ```
> Slithering...
> Galloping...
> ```
> 3.
> ```
> Slithering...
> Sammy the Python moved 5m.
> Galloping...
> Tommy the Palomino moved 34m.
> ```


**✍ WORKSHOP: Exercice 1**

## Nullable Types & --strictNullChecks

By default, the type checker considers `null` and `undefined` assignable to anything because in js `null` and `undefined` are valid values
of every type. having these two "default value" is often a source of issue in js if you don't pay attention and having to check for
both make the code less readable. For the record the inventor of null, Tony Hoare, calls this his “billion dollar mistake”.

The `--strictNullChecks` flag fixes this: when you declare a variable, it doesn’t automatically include null or undefined. You can include them explicitly using a union type:

```ts
let s = "foo";
s = null; // error, 'null' is not assignable to 'string'
let sn: string | null = "bar";
sn = null; // ok

sn = undefined; // error, 'undefined' is not assignable to 'string | null'
```
