# Get started with Typescript

This workshop aim to give you a tour of the Typescript language. Trying to show you why it was developed and what it can offer you over javascript.

After a quick global overview of the Typescript language we will start seeing different feature of the language along with short exercices just so you can play around with them.

# Setting up you environment

###  Editor

I recommend you to download [Visual Code](https://code.visualstudio.com/) that works exttrimly well.
I've also tested the Sublime Text Plugin but it's not so great when projects are consequent.
WebStorm (By Resharper/IntelliJ team) is probably a great tool also, especially if you come from the java world, but I never had the chance to test it.

### Compilation

We're going to use the ts compiler on npm to compile our code.
* [Download node if you don't have it](https://nodejs.org), once you have it installed you should be able to do `npm --version` & `node --version`
* Install the compiler globally with `npm install typescript -g`, once you have it you should be able to do `tsc --version`