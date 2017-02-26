# Workshop - ES6 killer features you can use in Typescript

## Destructuring

```ts
function sumAll() {
    var total = 0;
    for (var i = 0; i < arguments.length; i++) {
        total += arguments[i];
    }
    return total;
}

var total = sumAll(1, 2, 3);

console.log('the sum is ' + total);
```

[Playground Link](https://goo.gl/7ahYRi)

1. Rewrite this js code using the destructuring feature (i.e: change function signature to `function sumAll(...numbers) `)
2. Use `Array.reduce` to sum the numbers [see doc here](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Functions/arguments)

## Promises & async/await

```ts
function getId(cb) {
    setTimeout(
        function () { cb(42); },
        1000
    );
}

function getName(id, cb) {
    setTimeout(
        function () {
            if (id == 42)
                cb("Anakin");
            else
                console.error("[Error] Id is not valid");
        },
        1000
    );
}

getId(function (id) {
    getName(id, function (name) {
        console.log('the name is ' + name);
    });
});
```

[Playground Link](https://goo.gl/RzAQLI)

1. Transform this code using callbacks with `Promises`, find the doc [here](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Promise)
2. Transform this code using async/await