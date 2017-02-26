# [Modules and Resolution](https://www.typescriptlang.org/docs/handbook/modules.html)

## Import/Export
Any declaration (such as a variable, function, class, type alias, or interface) can be exported by adding the export keyword.

```ts
// ZipCodeValidator.ts
export const numberRegexp = /^[0-9]+$/;

export class ZipCodeValidator implements StringValidator {
    isAcceptable(s: string) {
        return s.length === 5 && numberRegexp.test(s);
    }
}
```

These exports can then be imported in other files this way:

```ts
import { ZipCodeValidator } from "./ZipCodeValidator";

let myValidator = new ZipCodeValidator();
```

You have the possibility to rename the export as well:

```ts
import { ZipCodeValidator as ZCV } from "./ZipCodeValidator";
let myValidator = new ZCV();
```

Or even import everything and "namespace" it (usually done for big external libraries):

```ts
import * as validator from "./ZipCodeValidator";
let myValidator = new validator.ZipCodeValidator();
```

## Default Export

Each module can optionally export a default export. Default exports are marked with the keyword default; and there can only be one default export per module.
default exports are imported using a different import form.
default exports are really handy. For instance, a library like JQuery might have a default export of jQuery or $, which we’d probably also import under the name $ or jQuery.

```ts
// JQuery.d.ts

declare let $: JQuery;
export default $;
```

In this case you have to import it this way:

```ts
// App.ts
import $ from "JQuery";

$("button.continue").html( "Next Step..." );
```

## Working with Other JavaScript Libraries, (Ambient modules)

To describe the shape of libraries not written in TypeScript, we need to declare the API that the library exposes.
We call declarations that don’t define an implementation "ambient". Typically, these are defined in .d.ts files.
If you’re familiar with C/C++, you can think of these as .h files.

To do so, we use a construct similar to ambient namespaces, but we use the module keyword and the quoted name
of the module which will be available to a later import. For example:

```ts
declare module "url" {
    export interface Url {
        protocol?: string;
        hostname?: string;
        pathname?: string;
    }

    export function parse(urlStr: string, parseQueryString?, slashesDenoteHost?): Url;
}

declare module "path" {
    export function normalize(p: string): string;
    export function join(...paths: any[]): string;
    export var sep: string;
}
```

Now we can `/// <reference> node.d.ts` and then load the modules using `import url = require("url");`.


```ts
/// <reference path="node.d.ts"/>
import * as URL from "url";
let myUrl = URL.parse("http://www.typescriptlang.org");
```

## Relative vs. Non-relative module imports

Module imports are resolved differently based on whether the module reference is relative or non-relative.

A relative import is one that starts with `/`, `./` or `../`. Some examples include:

* `import Entry from "./components/Entry";`
* `import { DefaultHeaders } from "../constants/http";`
* `import "/mod";`

Any other import is considered non-relative. Some examples include:

* `import * as $ from "jquery";`
* `import { Component } from "angular2/core";`

A relative import is resolved relative to the importing file and cannot resolve to an ambient module declaration.
You should use relative imports for your own modules that are guaranteed to maintain their relative location at runtime.

A non-relative import can be resolved relative to baseUrl, or through path mapping, which we’ll cover below.
They can also resolve to ambient module declarations. Use non-relative paths when importing any of your external dependencies.
