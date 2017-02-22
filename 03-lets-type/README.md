# Let's type

We're going to have quick overview of the typing system. Look at

//TODO
//TODO
//TODO

You can have a look at the typescript doc on [Basic Types](https://www.typescriptlang.org/docs/handbook/basic-types.html) and [Advanced Types](https://www.typescriptlang.org/docs/handbook/advanced-types.html)

## Syntax

TypeScript uses postfix type annotations (like scala does) for typing method return and arguments, class properties etc...
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

## Basic Types

TypeScript exposes the JavaScript primitives, as well as a couple of extra types that we are going to see in the next examples.

* `string` - the type is a primitive JavaScript string. E.g. `"hello"`.
* `number` - the type is a primitive JavaScript number. E.g. `10`.
* `boolean` - the type is a primitive JavaScript boolean. E.g. `true`.
* `any` - the type is _anything_.
* `any[]` - the type is an array of `any`.
* `void` - no type, effectively `undefined`.
* `() => any` - the type is a function that returns `any`.


## Type Inferencing

Type inferencing is used when the type is not provided explicitly. For instance, using `var x = 10`, TypeScript can infer that `x` is a number.

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

**BONUS:** Let's comment even more types:

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

Type assertion is a sort of casting that performs no special checking or restructuring of data. It is a way to tell the compilator "trust me, I know what I’m doing.".

⚠️️ `<any>something` can be handy to handle non-typed or wrongly-typed external libs but beware that doing this you might end-up with runtime error that could have been caught at compilation time.

## Classes

Forget the old prototype-based inheritance, since ES2015 JavaScript has object-oriented class-based approach.
TypeScript allows developers to use these techniques now, and compile them down to JavaScript that works across all major browsers.
TypeScript also add `private`/`public`/`protected` modifiers, and deeper object-oriented concepts.

```ts
class Greeter {
    private name: string;

    constructor(name: string) {
        this.name = name;
    }

    public greet() {
        return "Hello, " + this.greeting;
    }
}

let greeter = new Greeter("world");
```

## Interfaces

With Interfaces you can type anything more complicated than our basic types, including functions and classes. The syntax is very close to JavaScript object.

```ts
interface IPoint {
  x: number,
  y: number,
  move(IPoint: p): void
}

let origin: IPoint = {
    x: 0,
    y: 0,
    move: function (point: IPoint) { this.x += point.x; this.y += point.y }
};
```

You can also type dictionnaries with Interfaces

```ts
interface IMyDictionary {
  [index: string]: number
}

let dico: IMyDictionary = { "One": 1, "Two": 2, "Three": 3 };
```

## Enums

```ts
enum Color { Red = 1, Green = 2, Blue = 4 }
let c: Color = Color.Green;
```

If you don't want to do any computation inside you should use `const enums` that will generate absolutly no code.

```ts
const enum Color { Red = 1, Green = 2, Blue = 4 }
let c: Color = Color.Green;
```

More information about [enum compilation here](https://www.typescriptlang.org/docs/handbook/enums.html)
