function getFirstName(fullName){
    return fullName.split(" ")[0];
}

function getLastName(fullName){
    return fullName.split(" ")[1];
}

// hof: higher order function => that aceepts a function and calls it internally

function greeter(fullName, cb){
    let message = cb(fullName);
    console.log(message);
}

greeter("Kunal Singhal", getFirstName);
greeter("Kunal Singhal", getLastName);