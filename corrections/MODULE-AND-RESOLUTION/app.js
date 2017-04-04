"use strict";
exports.__esModule = true;
var ZipCodeValidator_1 = require("./RandomFolder/ZipCodeValidator");
var readline = require("readline");
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question('What zipcode would you like to test? ', function (zipCode) {
    var zipCodeValidator = new ZipCodeValidator_1.ZipCodeValidator();
    var isAcceptable = zipCodeValidator.isAcceptable(zipCode);
    if (isAcceptable)
        console.log("valid zipCode");
    else
        console.log("invalid zipCode");
    rl.close();
});
