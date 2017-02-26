import { ZipCodeValidator } from './ZipCodeValidator';
import * as readline from 'readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What zipcode would you like to test? ', (zipCode) => {
    let zipCodeValidator = new ZipCodeValidator();
    let isAcceptable = zipCodeValidator.isAcceptable(zipCode);

    if (isAcceptable)
        console.log("valid zipCode");
    else 
        console.log("invalid zipCode");
    rl.close();
});

