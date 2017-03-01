# ES6 killer features you can use in Typescript

## 1. [let](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let) and [const](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const)

`let` is the new var but it is block scoped like you expect it to be :)

```ts
function varTest() {
  var x = 1;
  if (true) {
    var x = 2;
    console.log(x);
  }
  console.log(x);
}
```

> ⚔ What does it return ?
> 
> 1. "1", "2"
> 2. "2", "2"
> 3. "2", "1"

```ts
function letTest() {
  let x = 1;
  if (true) {
    let x = 2;
    console.log(x);
  }
  console.log(x)
}
```

> ⚔ What does it return ?
> 
> 1. "1", "2"
> 2. "2", "2"
> 3. "2", "1"

[Playground Link](https://www.typescriptlang.org/play/#src=function%20varTest()%20%7B%0D%0A%20%20var%20x%20%3D%201%3B%0D%0A%20%20if%20(true)%20%7B%0D%0A%20%20%20%20var%20x%20%3D%202%3B%20%20%2F%2F%20same%20variable!%0D%0A%20%20%20%20console.log(x)%3B%20%20%2F%2F%202%0D%0A%20%20%7D%0D%0A%20%20console.log(x)%3B%20%20%2F%2F%202%0D%0A%7D%0D%0A%0D%0Afunction%20letTest()%20%7B%0D%0A%20%20let%20x%20%3D%201%3B%0D%0A%20%20if%20(true)%20%7B%0D%0A%20%20%20%20let%20x%20%3D%202%3B%20%20%2F%2F%20different%20variable%0D%0A%20%20%20%20console.log(x)%3B%20%20%2F%2F%202%0D%0A%20%20%7D%0D%0A%20%20console.log(x)%3B%20%20%2F%2F%201%0D%0A%7D)

`const` is used to define constants that will throw error if reasigned.

```ts
// define MY_FAV as a constant and give it the value 7
const MY_FAV = 7;

// this will throw an error
MY_FAV = 20;
```

[Playground Link](https://www.typescriptlang.org/play/#src=%2F%2F%20define%20MY_FAV%20as%20a%20constant%20and%20give%20it%20the%20value%207%0D%0Aconst%20MY_FAV%20%3D%207%3B%0D%0A%0D%0A%2F%2F%20this%20will%20throw%20an%20error%0D%0AMY_FAV%20%3D%2020%3B)

## 2. this and [arrow functions](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Functions/Arrow_functions)

In JavaScript, this is a variable that’s set when a function is called. This makes it a very powerful and flexible feature, but it comes at the cost of always
having to know about the context that a function is executing in. This is notoriously confusing, especially when returning a function or passing a function as an argument.

Arrow functions (`(arg1, arg2 /* ... */) => { /* ... */ }`) capture the `this` **where the function is created** rather than where it is invoked.

```ts
var deck = {
    suits: ["hearts", "spades", "clubs", "diamonds"],
    createCardPicker: function () {
        return function () {
            var pickedCard = Math.floor(Math.random() * 13);
            var pickedSuit = Math.floor(Math.random() * 4);

            return { suit: this.suits[pickedSuit], card: pickedCard };
        };
    }
};

var cardPicker = deck.createCardPicker();
var pickedCard = cardPicker();

alert("card: " + pickedCard.card + " of " + pickedCard.suit);
```

> ⚔ What does it return ?
> 
> 1. "card: 12 of hearts"
> 2. "card: undefined of hearts"
> 3. "card: undefined of undefined"

Let's try it and understand what happens: [Playground link](https://goo.gl/DlBYCn)

Try replacing "`function()`" by "`() =>`"

> ⚔ What does it return ?
> 
> 1. "card: 12 of hearts"
> 2. "card: undefined of hearts"
> 3. "card: undefined of undefined"

## 3. Template strings

Template strings provide syntactic sugar for constructing strings. This is similar to string interpolation features in Perl, Python and more

```ts
// Basic literal string creation
console.log(`In JavaScript '\n' is a line-feed.`);

// Multiline strings
console.log(`In JavaScript this is
 not legal.`);

// String interpolation
var name = "Bob";
var time = "today";
console.log(`Hello ${name}, how are you ${time}?`);
```

[Playground Link](https://www.typescriptlang.org/play/#src=%2F%2F%20Basic%20literal%20string%20creation%0D%0Aconsole.log(%60In%20JavaScript%20'%5Cn'%20is%20a%20line-feed.%60)%3B%0D%0A%0D%0A%2F%2F%20Multiline%20strings%0D%0Aconsole.log(%60In%20JavaScript%20this%20is%0D%0A%20not%20legal.%60)%3B%0D%0A%0D%0A%2F%2F%20String%20interpolation%0D%0Avar%20name%20%3D%20%22Bob%22%3B%0D%0Avar%20time%20%3D%20%22today%22%3B%0D%0Aconsole.log(%60Hello%20%24%7Bname%7D%2C%20how%20are%20you%20%24%7Btime%7D%3F%60)%3B)

## 4. [Destructuring](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)

Destructuring allows binding using pattern matching, with support for matching arrays and objects. Destructuring is fail-soft,
similar to standard object lookup foo["bar"], producing undefined values when not found.

In practice this is helpful to create Tuples, or exchanging value of 2 variables.

Typescript also allows you to use the Rest and Spread properties for object and arrays.

```ts
var a, b, rest;
[a, b] = [10, 20];
a; // 10
b; // 20
```

Typescript also allows you to use the Rest and Spread properties for object and arrays.

```ts
// Here z take the Rest of the assigned object
let { x, y, ...z } = { x: 1, y: 2, a: 3, b: 4 };
x; // 1
y; // 2
z; // { a: 3, b: 4 }

// Here z is spread to be assigned to n
let n = { x, y, ...z };
n; // { x: 1, y: 2, a: 3, b: 4 }

// Works with arrays too
[a, b, ...rest] = [10, 20, 30, 40, 50];
a; // 10
b; // 20
rest; // [30, 40, 50]

var o = {p: 42, q: true};
var {p, q} = o;
p; // 42
q; // true
```

[Playground Link](https://www.typescriptlang.org/play/#src=var%20a%2C%20b%2C%20rest%3B%0D%0A%5Ba%2C%20b%5D%20%3D%20%5B10%2C%2020%5D%3B%0D%0Aa%3B%20%2F%2F%2010%0D%0Ab%3B%20%2F%2F%2020%0D%0A%0D%0A%2F%2F%20Here%20z%20take%20the%20Rest%20of%20the%20assigned%20object%0D%0Alet%20%7B%20x%2C%20y%2C%20...z%20%7D%20%3D%20%7B%20x%3A%201%2C%20y%3A%202%2C%20a%3A%203%2C%20b%3A%204%20%7D%3B%0D%0Ax%3B%20%2F%2F%201%0D%0Ay%3B%20%2F%2F%202%0D%0Az%3B%20%2F%2F%20%7B%20a%3A%203%2C%20b%3A%204%20%7D%0D%0A%0D%0A%2F%2F%20Here%20z%20is%20spread%20to%20be%20assigned%20to%20n%0D%0Alet%20n%20%3D%20%7B%20x%2C%20y%2C%20...z%20%7D%3B%0D%0An%3B%20%2F%2F%20%7B%20x%3A%201%2C%20y%3A%202%2C%20a%3A%203%2C%20b%3A%204%20%7D%0D%0A%0D%0A%2F%2F%20Works%20with%20arrays%20too%0D%0A%5Ba%2C%20b%2C%20...rest%5D%20%3D%20%5B10%2C%2020%2C%2030%2C%2040%2C%2050%5D%3B%0D%0Aa%3B%20%2F%2F%2010%0D%0Ab%3B%20%2F%2F%2020%0D%0Arest%3B%20%2F%2F%20%5B30%2C%2040%2C%2050%5D%0D%0A%0D%0Avar%20o%20%3D%20%7Bp%3A%2042%2C%20q%3A%20true%7D%3B%0D%0Avar%20%7Bp%2C%20q%7D%20%3D%20o%3B%0D%0Ap%3B%20%2F%2F%2042%0D%0Aq%3B%20%2F%2F%20true)

**✍ WORKSHOP: exercice 1**

## 5. [Promises](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)

The Promise object is used for asynchronous computations. A Promise represents a value which may be available now, or in the future, or never.

```ts
var myFirstPromise = new Promise(function(resolve, reject){
    //We call resolve(...) when what we were doing async succeeded, and reject(...) when it failed.
    //In this example, we use setTimeout(...) to simulate async code. 
    //In reality, you will probabally using something like XHR or an HTML5 API.
    setTimeout(() => {
        resolve("Success!"); //Yay! Everything went well!
    }, 2000);
});

myFirstPromise.then(successMessage => {
    //successMessage is whatever we passed in the resolve(...) function above.
    //It doesn't have to be a string, but if it is only a succeed message, it probably will be.
    console.log("Yay! " + successMessage);
}).catch(errorMessage => {
    //errorMessage is whatever we passed in the reject(...) function above.
    console.log(":( " + errorMessage);
});
```

> ⚔ What does it return ?
> 
> 1. `"Yay! Success!"` after 2 seconds
> 2. `"Yay! Success!"` right away
> 3. `":( Success!"` after 2 seconds

```ts
var myFirstPromise = new Promise(function(resolve, reject){
    setTimeout(() => {
        resolve("Success!");
    }, 2000);

    reject("Oops!"); //REJECTION
});

myFirstPromise.then(successMessage => {
    console.log("Yay! " + successMessage);
}).catch(errorMessage => {
    console.log(":( " + errorMessage);
});
```

> ⚔ What does it return ?
> 
> 1. `":( Oops!"` right away then `"Yay! Success!"` after 2 seconds
> 2. `":( Oops!"` after 2 seconds
> 3. `":( Oops!"` right away


```ts
var myFirstPromise = function (message) {
    return new Promise(function (resolve, reject) {
        setTimeout(() => {
            resolve("1 - " + message); //Yay! Everything went well!
        }, 2000);
    });
}

var mySecondPromise = function (message) {
    return new Promise(function (resolve, reject) {
        setTimeout(() => {
            resolve("2 - " + message); //Yay! Everything went well!
        }, 2000);
    });
}

myFirstPromise("hello").then(successMessage => {
    return mySecondPromise(successMessage);
}).then(successMessage => {
    console.log(successMessage)
}).catch(errorMessage => {
    console.log(":( " + errorMessage);
});
```

> ⚔ What will it log ?
> 
> 1. `2 - 1 - hello` after 4 seconds
> 2. `1 - 2 - hello` after 4 seconds
> 3. `:( 2 - 1 - hello` after 4 seconds


So if I add a `reject()` on the second Promise like I did earlier...

```ts
var myFirstPromise = function (message) {
    return new Promise(function (resolve, reject) {
        setTimeout(() => {
            resolve("1 - " + message);
        }, 2000);
    });
}

var mySecondPromise = function (message) {
    return new Promise(function (resolve, reject) {
        setTimeout(() => {
            resolve("2 - " + message);
        }, 2000);
        reject("Oops!"); // REJECTION D:
    });
}

myFirstPromise("hello").then(successMessage => {
    return mySecondPromise(successMessage);
}).then(successMessage => {
    console.log(successMessage)
}).catch(errorMessage => {
    console.log(":( " + errorMessage);
});
```

> ⚔ ...What will it log ?
> 
> 1. `:( Oops` right away
> 2. `:( Oops` after 2 seconds
> 3. `:( 1 - Oops` after 2 seconds

Just so that you understand the value of the Promise syntax let's have a quick look at how it would look like with callbacks:

```ts
var myFirstCallback = function (message) {
    return function (resolve, reject) {
        setTimeout(() => {
            resolve("1 - " + message);
        }, 2000);
    };
}

var mySecondCallback = function (message) {
    return function (resolve, reject) {
        setTimeout(() => {
            resolve("2 - " + message);
        }, 2000);
    };
}

myFirstCallback("hello")(successMessage => {
    mySecondCallback(successMessage)(successMessage => {
        console.log(successMessage)
    }, errorMessage => {
        console.log(":( " + errorMessage);
    });
}, errorMessage => {
    console.log(":( " + errorMessage);
})
```

Promise also comes with lot's of tooling. For example they can be run in parallel, merging the results only when all Promises have been resolved, thanks to `Promise.all(promises: Promise[])`

So if we wan tto make our previous example work this way:

```ts
var myFirstPromise = function (message) {
    return new Promise(function (resolve, reject) {
        setTimeout(() => {
            resolve("1 - " + message); //Yay! Everything went well!
        }, 2000);
    });
}

var mySecondPromise = function (message) {
    return new Promise(function (resolve, reject) {
        setTimeout(() => {
            resolve("2 - " + message); //Yay! Everything went well!
        }, 2000);
    });
}

Promise.all<string>([myFirstPromise(""), mySecondPromise("")]).then(function(results) {
    console.log(results[1] + results[0] + "hello")//do work. result is an array contains the values of the three fulfilled promises.
}).catch(function(error) {
    console.log(":( " + error)
});
```

> ⚔ What will it log ?
> 
> 1. `2 - 1 - hello` after 4 seconds
> 2. `2 - 1 - hello` after 2 seconds
> 3. `2 - 1 - hello` right away


[Playground Link](goo.gl/Wg7eX2)

## 6. [async/await](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-2-1.html)

`async`/`await` is a new feature in ECMAScript 2017 that allows users to write code around promises without needing to
use callbacks. `async` functions can be written in a style that looks synchronous, but acts asynchronously, using the await keyword.

```ts
function delay(ms: number) {
    return new Promise<void>(function(resolve) {
        setTimeout(resolve, ms);
    });
}

async function asyncAwait() {
    console.log("Knock, knock!");

    await delay(1000); // Won't block other code to be executed!
    console.log("Who's there?");

    await delay(1000);
    console.log("async/await!");
}

asyncAwait();
```

[Playground Link](https://goo.gl/9j20iW)

**✍ WORKSHOP: exercice 2**

## 7. [Map](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map) and [Set](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set)

Efficient data structures for common algorithms!

```ts
// Sets
var s = new Set();
s.add("hello").add("goodbye").add("hello");
console.log(s.size) // 2;
console.log(s.has("hello")) // true;

// Maps - keys can be anything, but Typescript will help us restrict key/value types
var m = new Map();
m.set("hello", 42);
m.set(s, 34);
console.log(m.get(s)) // 34;
```

> ⚠️️ For ES5, Typescript does not provide polyfills for Map and Set, [you need to add them yourself](http://stackoverflow.com/questions/30019542/es6-map-in-typescript/30112075#30112075).
> They say they will never do (but it works when targetting ES6 obviously)

[Playground Link](https://goo.gl/eVOLqG)

## 8. [Iterators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of)

Iterator objects enable custom iteration like C# IEnumerable or Java Iterable.
This way you can iterate over Array, Map, Set, function arguments etc...

```ts
let iterable = [['a', 1], ['b', 2], ['c', 3]];

for (let entry of iterable) {
  console.log(entry);
}
// ['a', 1]
// ['b', 2]
// ['c', 3]

for (let [key, value] of iterable) {
  console.log(value);
}
// 1
// 2
// 3
```

[Playground Link](https://www.typescriptlang.org/play/#src=let%20iterable%20%3D%20%5B%5B'a'%2C%201%5D%2C%20%5B'b'%2C%202%5D%2C%20%5B'c'%2C%203%5D%5D%3B%0D%0A%0D%0Afor%20(let%20entry%20of%20iterable)%20%7B%0D%0A%20%20console.log(entry)%3B%0D%0A%7D%0D%0A%2F%2F%20%5B'a'%2C%201%5D%0D%0A%2F%2F%20%5B'b'%2C%202%5D%0D%0A%2F%2F%20%5B'c'%2C%203%5D%0D%0A%0D%0Afor%20(let%20%5Bkey%2C%20value%5D%20of%20iterable)%20%7B%0D%0A%20%20console.log(value)%3B%0D%0A%7D%0D%0A%2F%2F%201%0D%0A%2F%2F%202%0D%0A%2F%2F%203)

You can create your own iterator to iterate over. Iteration is based on these interfaces:

```ts
interface IteratorResult {
  done: boolean;
  value: any;
}
interface Iterator {
  next(): IteratorResult;
}
interface Iterable {
  [Symbol.iterator](): Iterator
}
```

Iterator does not have to iterate a finite value. The typical example is a Fibonacci sequence:

```ts
let fibonacci = {
  [Symbol.iterator]() {
    let pre = 0, cur = 1;
    return {
      next() {
        [pre, cur] = [cur, pre + cur];
        return { done: false, value: cur }
      }
    }
  }
}

for (var n of fibonacci) {
  // truncate the sequence at 1000
  if (n > 1000)
    break;
  console.log(n);
}
```

> ⚠️️ Same thing here: For ES5, Typescript does not provide polyfills to iterate over something else than string and array,
> you need to add them yourself :(

> More on Symbols [here](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Symbol)

> [More ES6 features here](https://github.com/lukehoban/es6features)