# Correction - ES6 killer features you can use in Typescript

## Destructuring

```ts
function sumAll(...numbers) {
    return numbers.reduce((acc, val) => acc + val);
}

let total = sumAll(1, 2, 3);

console.log(`the sum is  ${total}`);
```

## Promises & async/await

```ts
function getId() {
    return new Promise(function (resolve, reject) {
        setTimeout(
            function () { resolve(42); },
            1000
        );
    });
}

function getName(id) {
    return new Promise(function (resolve, reject) {
        setTimeout(
            function () {
                if (id == 42)
                    resolve("Anakin");
                else
                    reject("[Error] Id is not valid")
            },
            1000
        );
    });
}

getId().then(id => {
    return getName(id);
}).then(name => {
    console.log('the name is ' + name);
}).catch(err => {
    console.error(err);
});
```

```ts
function getId() {
    return new Promise(function (resolve, reject) {
        setTimeout(
            function () { resolve(42); },
            1000
        );
    });
}

function getName(id) {
    return new Promise(function (resolve, reject) {
        setTimeout(
            function () {
                if (id == 42)
                    resolve("Anakin");
                else
                    reject("[Error] Id is not valid")
            },
            1000
        );
    });
}

async function displayName() {
    let id = await getId();
    let name = await getName(id);

    console.log('the name is ' + name);
}

displayName();
```
