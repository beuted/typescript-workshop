# Why Typescript

There are a lot of options available to frontend devs today: ES5, ES6 (Babel), TypeScript, Dart, CoffeeScript, PureScript, Elm, etc.. So why TypeScript?

## What is typescript ?

It has been created and maintained by Microsoft since 2010 (released in 2012). Anders Hejlsberg, lead architect of C# and creator of Delphi and Turbo Pascal, has worked on the development of TypeScript.

Typescript aim to:
* Being a superset of ES2015 (Not break compatibility with old JS versions)
* Add _optionnal_ static type support

Since they needed ES2015 features such as classes it naturally became a transpiler and it is now one of the Best Javascript transpiler out there with [Babel](https://babeljs.io/) his advantage being a better compiled code readability in my opinion.

[It is easier to find support for Typescript on the web than it is for it's competitors](https://trends.google.com/trends/explore?date=all&q=%2Fm%2F0hjc5m0,%2Fm%2F0n50hxv,babel%20javascript,%2Fm%2F0h52xr1,%2Fm%2F0ncc1sv)
<script type="text/javascript" src="https://ssl.gstatic.com/trends_nrtr/925_RC01/embed_loader.js"></script> <script type="text/javascript"> trends.embed.renderExploreWidget("TIMESERIES", {"comparisonItem":[{"keyword":"/m/0hjc5m0","geo":"","time":"all"},{"keyword":"/m/0n50hxv","geo":"","time":"all"},{"keyword":"babel javascript","geo":"","time":"all"},{"keyword":"/m/0h52xr1","geo":"","time":"all"},{"keyword":"/m/0ncc1sv","geo":"","time":"all"}],"category":0,"property":""}, {"exploreQuery":"date=all&q=%2Fm%2F0hjc5m0,%2Fm%2F0n50hxv,babel%20javascript,%2Fm%2F0h52xr1,%2Fm%2F0ncc1sv","guestPath":"https://trends.google.com:443/trends/embed/"}); </script>

And it has already been adopted [by many](https://github.com/search?p=2&q=stars%3A%3E1+language%3ATypeScript&ref=searchresults&type=Repositories&utf8=%E2%9C%93) to build their project: Angular2, Ionic, Phaser, rxjs, NativeScript...

## Pros and Cons

✔️️ **Latest ES2015 _(ES6)_ features** some ES2016 features, _(even nodejs is not up to date with all ES6 features)_<br>
✔️️ **Static analyse of code** catching of errors, highlighting, discoverability, autocomplete & refactoring in IDE<br>
✔️️ **Structuring mechanism** for large pieces of code, the good old _class-based object-oriented programming_<br>
✔️️ **Will compile ES5 js** Allowing you to gradually upgrade your old JS code (Compare to Elm and PureScript)

❌ **Require compilation** Making it a bit slower for live reloading and watches<br>
❌ **External libs definition variable** Not all libs have it and you might have to leave them untyped<br>
❌ **Typescript is not magic** Can create an illusion of safty don't forget that it's still JS with all the weird things we love & hate<br>
