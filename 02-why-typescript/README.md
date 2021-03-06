# Why Typescript

There are a lot of options available to front-end devs today: ES5, ES6 (Babel), TypeScript, Dart, CoffeeScript, PureScript, Elm, etc.. So why TypeScript?

## What is typescript ?

It has been created and maintained by Microsoft since 2010 (released in 2012). Anders Hejlsberg, lead architect of C# and creator of Delphi and Turbo Pascal, has worked on the development of TypeScript.

Typescript aim to:
* Being a superset of ES6 (Not break compatibility with old JS versions)
* Add _optional_ static type support

Since they needed ES6 features such as classes it naturally became a transpiler and it is now one of the Best Javascript transpiler out there with [Babel](https://babeljs.io/) his advantage being a better compiled code readability in my opinion.

[It is easier to find support for Typescript on the web than it is for it's competitors](https://trends.google.com/trends/explore?cat=31&q=typescript,flow%20javascript,dart,Elm,babel)
<img src="./Capture.PNG"></img>

And it has already been adopted [by many](https://github.com/search?p=2&q=stars%3A%3E1+language%3ATypeScript&ref=searchresults&type=Repositories&utf8=%E2%9C%93) to build their project: Angular2, Ionic, Phaser, rxjs, NativeScript...

## Pros and Cons

✔️️ **Latest _ES6_ features** some _ES7_ features, _(even nodejs is not up to date with all ES6 features)_<br>
✔️️ **Static analyze of code** catching of errors, highlighting, discoverability, autocomplete & refactoring in IDE<br>
✔️️ **Structuring mechanism** for large pieces of code, the good old _class-based object-oriented programming_<br>
✔️️ **Will compile ES5 js** Allowing you to gradually upgrade your old JS code (Compare to Elm and PureScript)

❌ **Require compilation** Making it a bit slower for live reloading and watches<br>
❌ **External libs definition variable** Not all libs have it and you might have to leave them untyped<br>
❌ **Typescript is not magic** Can create an illusion of safety don't forget that it's still JS with all the weird things we love & hate<br>
