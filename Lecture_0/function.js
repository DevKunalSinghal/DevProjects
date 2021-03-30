function sayHi(message) {
    console.log("i want to type" + message);
    return 10;
}
// by  default function undefined return krega
let rval  = sayHi("Hello World");
console.log(rval);

// functions are first class citizens
// functions are variables

let greeter = function stat(){
    console.log("functions are variables");
}

greeter();