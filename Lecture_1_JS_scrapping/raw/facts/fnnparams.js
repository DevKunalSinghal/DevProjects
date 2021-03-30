// functions are variables
// pass a variable as a paramter to function
// pass a function as a parameter to function

function myfun(param){
    console.log(param());
}

//myfun("hi");
//myfun(10);
//myfun([1,2,3,4,5]);

// smallerfn is a callback function.... function that is passed to another function and could be called by it

myfun(function smallerfn(){
    let a = 10;
    a++;
    console.log("I am passed to myfun");
    return a;
})