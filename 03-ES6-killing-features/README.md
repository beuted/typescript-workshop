# ES6 killing features you can use in Typescript

## `this` and [arrow functions](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Functions/Arrow_functions)

In JavaScript, this is a variable that’s set when a function is called. This makes it a very powerful and flexible feature, but it comes at the cost of always
having to know about the context that a function is executing in. This is notoriously confusing, especially when returning a function or passing a function as an argument.

Arrow functions (`(arg1, arg2 /* ... */) => { /* ... */ }`) capture the `this` **where the function is created** rather than where it is invoked.

```ts
let deck = {
    suits: ["hearts", "spades", "clubs", "diamonds"],
    cards: Array(52),
    createCardPicker: function() {
        return function() {
            let pickedCard = Math.floor(Math.random() * 52);
            let pickedSuit = Math.floor(pickedCard / 13);

            return {suit: this.suits[pickedSuit], card: pickedCard % 13};
        }
    }
}

let cardPicker = deck.createCardPicker();
let pickedCard = cardPicker();

alert("card: " + pickedCard.card + " of " + pickedCard.suit);
```

What does it return ?

[Let's try it and understand what happens](https://www.typescriptlang.org/play/#src=let%20deck%20%3D%20%7B%0D%0A%20%20%20%20suits%3A%20%5B%22hearts%22%2C%20%22spades%22%2C%20%22clubs%22%2C%20%22diamonds%22%5D%2C%0D%0A%20%20%20%20cards%3A%20Array(52)%2C%0D%0A%20%20%20%20createCardPicker%3A%20function()%20%7B%0D%0A%20%20%20%20%20%20%20%20return%20function()%20%7B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20let%20pickedCard%20%3D%20Math.floor(Math.random()%20*%2052)%3B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20let%20pickedSuit%20%3D%20Math.floor(pickedCard%20%2F%2013)%3B%0D%0A%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20return%20%7Bsuit%3A%20this.suits%5BpickedSuit%5D%2C%20card%3A%20pickedCard%20%25%2013%7D%3B%0D%0A%20%20%20%20%20%20%20%20%7D%0D%0A%20%20%20%20%7D%0D%0A%7D%0D%0A%0D%0Alet%20cardPicker%20%3D%20deck.createCardPicker()%3B%0D%0Alet%20pickedCard%20%3D%20cardPicker()%3B%0D%0A%0D%0Aalert(%22card%3A%20%22%20%2B%20pickedCard.card%20%2B%20%22%20of%20%22%20%2B%20pickedCard.suit)%3B)

Try replacing `function()` by `() =>`

## [let](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let) and [const](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const)

`let` is the new var but it is block scoped like you expect it to be :)

```ts
function varTest() {
  var x = 1;
  if (true) {
    var x = 2;  // same variable!
    console.log(x);  // 2
  }
  console.log(x);  // 2
}

function letTest() {
  let x = 1;
  if (true) {
    let x = 2;  // different variable
    console.log(x);  // 2
  }
  console.log(x);  // 1
}
```

`const` is used to define constants that will throw error if reasigned.

```ts
// define MY_FAV as a constant and give it the value 7
const MY_FAV = 7;

// this will throw an error
MY_FAV = 20;
```

## Template strings

Template strings provide syntactic sugar for constructing strings. This is similar to string interpolation features in Perl, Python and more

```ts
// Basic literal string creation
`In JavaScript '\n' is a line-feed.`

// Multiline strings
`In JavaScript this is
 not legal.`

// String interpolation
var name = "Bob", time = "today";
`Hello ${name}, how are you ${time}?`
```

## [Destructuring](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)

Destructuring allows binding using pattern matching, with support for matching arrays and objects. Destructuring is fail-soft,
similar to standard object lookup foo["bar"], producing undefined values when not found.

In practice this is helpful to create Tuples, but I can't think of another use that would not be too confusing to read IMO.

```ts
var a, b, rest;
[a, b] = [10, 20];
console.log(a); // 10
console.log(b); // 20

[a, b, ...rest] = [10, 20, 30, 40, 50];
console.log(a); // 10
console.log(b); // 20
console.log(rest); // [30, 40, 50]

var o = {p: 42, q: true};
var {p, q} = o;
console.log(p); // 42
console.log(q); // true
```

## [Map](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map) and [Set](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set)

Efficient data structures for common algorithms!

```ts
// Sets
var s = new Set();
s.add("hello").add("goodbye").add("hello");
console.log(s.size) // 2;
console.log(s.has("hello")) // true;

// Maps - keys can be anything, but Typescript will help us restrict key/valmue types
var m = new Map();
m.set("hello", 42);
m.set(s, 34);
console.log(m.get(s)) // 34;
```

## [Iterators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of)

Iterator objects enable custom iteration like CLR IEnumerable or Java Iterable.
This way you can iterate over Array, Map, Set, function arguments etc...

```ts
let iterable = new Map([['a', 1], ['b', 2], ['c', 3]]);

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

You can create your on iterator to iterate over, Iteration is based on these duck-typed interfaces:

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

Here is an example:

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

## [Promises](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)

The Promise object is used for asynchronous computations. A Promise represents a value which may be available now, or in the future, or never.

```ts
var myFirstPromise = new Promise(function(resolve, reject){
    //We call resolve(...) when what we were doing async succeeded, and reject(...) when it failed.
    //In this example, we use setTimeout(...) to simulate async code. 
    //In reality, you will probabally using something like XHR or an HTML5 API.
    setTimeout(() => {
        resolve("Success!"); //Yay! Everything went well!
    }, 250);
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

> [More ES6 features here](https://github.com/lukehoban/es6features)