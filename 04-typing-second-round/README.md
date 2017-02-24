# Typing second round

## Generics

Typescript support [Generic class and functions](https://www.typescriptlang.org/docs/handbook/generics.html)

### Generic functions

In languages like C# and Java, one of the main tools in the toolbox for creating reusable components is generics,
that is, being able to create a component that can work over a variety of types rather than a single one.
This allows users to consume these components and use their own types.


Let's do a generic function taking an argument logging it and returning it.

```ts
function lodAndReturn<T>(arg: T): T {
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
function printNumberAlphabets<T1,T2>(arg1:T1[], arg2:T2[]): void{
arg1.forEach((element, index) => {
    console.log(element, "is", arg2[index]);
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
        img.setAttribute('src', this.linkedObject.getUrl())
        document.body.appendChild(img);   
    }
}

new View(new StarWarsImage()).display();
```

## Abstract classes

http://www.typescriptlang.org/docs/handbook/classes.html),
 and all the
Object Oriented sugar you're expecting from an Object Oriented Language.

## Enums

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

## Union Types

TODO

## Decorators

TODO