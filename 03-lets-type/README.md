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

[Playground Link](https://www.typescriptlang.org/play/#src=function%20pushNumberToArray(arr%3A%20number%5B%5D%2C%20num%3A%20number)%3A%20void%20%7B%0D%0A%20%20arr.push(num)%3B%0D%0A%7D%0D%0A%0D%0Afunction%20arrayLengthStr(arr%3A%20any%5B%5D)%3A%20string%20%7B%0D%0A%20%20return%20%60The%20size%20of%20this%20array%20is%20%24%7Barr.length%7D!%60%3B%0D%0A%7D%0D%0A%0D%0Alet%20awesomeArray%3A%20number%5B%5D%20%3D%20%5B1%2C%202%5D%3B%0D%0Aconsole.log(arrayLengthStr(awesomeArray))%3B%0D%0ApushNumberToArray(awesomeArray%2C%203)%3B%0D%0Aconsole.log(arrayLengthStr(awesomeArray))%3B%0D%0ApushNumberToArray(awesomeArray%2C%20%22hey%22)%3B%20%2F%2F%20This%20will%20raise%20an%20error%20at%20compilation!)

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

_**BONUS:** Let's comment even more types:_

```ts
function pushNumberToArray(arr/*: number[]*/, num/*: number*/)/*: void*/ {
  arr.push(num);
}

function arrayLengthStr(arr: any[])/*: string*/ {
  return `The size of this array is ${arr.length}!`;
}

let awesomeArray/*: number[]*/ = [1, 2];
console.log(arrayLengthStr(awesomeArray));
pushNumberToArray(awesomeArray, 3);
console.log(arrayLengthStr(awesomeArray));
pushNumberToArray(awesomeArray, 'hey'); // Will it raise an Error ?
```

## Type assertion

```ts
let someValue: any = "this is a string";
let strLength: number = (<string>someValue).length;
```

[Playground Link](https://www.typescriptlang.org/play/#src=let%20someValue%3A%20any%20%3D%20%22this%20is%20a%20string%22%3B%0D%0Alet%20strLength%3A%20number%20%3D%20(%3Cstring%3EsomeValue).length%3B%20)

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
        return "Hello, " + this.greeting;
    }

    public static Greet(name: string) {
         return "Hello, " + this.greeting;
    }
}

let greeter = new Greeter("world");
```

[Playground Link](https://www.typescriptlang.org/play/#src=class%20Greeter%20%7B%0D%0A%20%20%20%20private%20readonly%20name%3A%20string%3B%0D%0A%0D%0A%20%20%20%20constructor(name%3A%20string)%20%7B%0D%0A%20%20%20%20%20%20%20%20this.name%20%3D%20name%3B%0D%0A%20%20%20%20%7D%0D%0A%0D%0A%20%20%20%20public%20greet()%20%7B%0D%0A%20%20%20%20%20%20%20%20return%20%22Hello%2C%20%22%20%2B%20this.name%3B%0D%0A%20%20%20%20%7D%0D%0A%0D%0A%20%20%20%20public%20static%20Greet(name%3A%20string)%20%7B%0D%0A%20%20%20%20%20%20%20%20%20return%20%22Hello%2C%20%22%20%2B%20this.name%3B%0D%0A%20%20%20%20%7D%0D%0A%7D%0D%0A%0D%0Alet%20greeter%20%3D%20new%20Greeter(%22world%22)%3B)

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

[Playground Link](https://www.typescriptlang.org/play/#src=interface%20IPoint%20%7B%0D%0A%20%20x%3A%20number%2C%0D%0A%20%20y%3A%20number%2C%0D%0A%20%20move(p%3A%20IPoint)%3A%20void%0D%0A%7D%0D%0A%0D%0Alet%20origin%3A%20IPoint%20%3D%20%7B%0D%0A%20%20%20%20x%3A%200%2C%0D%0A%20%20%20%20y%3A%200%2C%0D%0A%20%20%20%20move%3A%20function%20(point%3A%20IPoint)%20%7B%20this.x%20%2B%3D%20point.x%3B%20this.y%20%2B%3D%20point.y%3B%20%7D%0D%0A%7D%3B%0D%0A%0D%0Aclass%20Point%20implements%20IPoint%20%7B%0D%0A%20%20%20%20public%20x%3A%20number%3B%0D%0A%20%20%20%20public%20y%3A%20number%3B%0D%0A%20%20%20%20public%20move(point%3A%20IPoint)%20%7B%0D%0A%20%20%20%20%20%20%20%20this.x%20%2B%3D%20point.x%3B%0D%0A%20%20%20%20%20%20%20%20this.y%20%2B%3D%20point.y%3B%0D%0A%20%20%20%20%7D%0D%0A%7D)

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

[Playground Link](https://www.typescriptlang.org/play/#src=class%20Animal%20%7B%0D%0A%20%20%20%20protected%20readonly%20name%3A%20string%3B%0D%0A%0D%0A%20%20%20%20constructor(theName%3A%20string)%20%7B%20this.name%20%3D%20theName%3B%20%7D%0D%0A%20%20%20%20move(distanceInMeters%3A%20number%20%3D%200)%20%7B%0D%0A%20%20%20%20%20%20%20%20console.log(%60%24%7Bthis.name%7D%20moved%20%24%7BdistanceInMeters%7Dm.%60)%3B%0D%0A%20%20%20%20%7D%0D%0A%7D%0D%0A%0D%0Aclass%20Snake%20extends%20Animal%20%7B%0D%0A%20%20%20%20constructor(name%3A%20string)%20%7B%20super(name)%3B%20%7D%0D%0A%20%20%20%20move(distanceInMeters%20%3D%205)%20%7B%0D%0A%20%20%20%20%20%20%20%20console.log(%22Slithering...%22)%3B%0D%0A%20%20%20%20%20%20%20%20super.move(distanceInMeters)%3B%0D%0A%20%20%20%20%7D%0D%0A%7D%0D%0A%0D%0Aclass%20Horse%20extends%20Animal%20%7B%0D%0A%20%20%20%20constructor(name%3A%20string)%20%7B%20super(name)%3B%20%7D%0D%0A%20%20%20%20move(distanceInMeters%20%3D%2045)%20%7B%0D%0A%20%20%20%20%20%20%20%20console.log(%22Galloping...%22)%3B%0D%0A%20%20%20%20%20%20%20%20super.move(distanceInMeters)%3B%0D%0A%20%20%20%20%7D%0D%0A%7D%0D%0A%0D%0Alet%20sam%20%3D%20new%20Snake(%22Sammy%20the%20Python%22)%3B%0D%0Alet%20tom%3A%20Animal%20%3D%20new%20Horse(%22Tommy%20the%20Palomino%22)%3B%0D%0A%0D%0Asam.move()%3B%0D%0Atom.move(34)%3B)

Derived classes that contains constructor functions must call super() which will execute the constructor function
on the base class.

The example also shows how to override methods in the base class with methods that are specialized for the
subclass. Here both `Snake` and `Horse` create a `move` method that overrides the `move` from `Animal`, giving
it functionality specific to each class. Note that even though `tom` is declared as an Animal, since its value is
a `Horse`, when `tom.move(34)` calls the overriding method in `Horse`:

```
Slithering...
Sammy the Python moved 5m.
Galloping...
Tommy the Palomino moved 34m.
```

## Nullable Types & --strictNullChecks

By default, the type checker considers null and undefined assignable to anything because in js null and undefined are valid values
of every type. having these two "default value" is often a source of issue in js if you don't pay attention and having to check for
both make the code less readable. For the record the inventor of null, Tony Hoare, calls this his “billion dollar mistake”.

The --strictNullChecks flag fixes this: when you declare a variable, it doesn’t automatically include null or undefined. You can include them explicitly using a union type:

```ts
let s = "foo";
s = null; // error, 'null' is not assignable to 'string'
let sn: string | null = "bar";
sn = null; // ok

sn = undefined; // error, 'undefined' is not assignable to 'string | null'
```
