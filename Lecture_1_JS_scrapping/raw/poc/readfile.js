let fs = require("fs");
// npm install cheerio sbse bahar
// cheerio module require
let cheerio = require("cheerio");
let html = fs.readFileSync("../facts/index.html","utf-8");
console.log(typeof html);
//console.log(html);

let $ = cheerio.load(html);

let h1 = $("h1");
let h1kadata = h1.text();
console.log(h1kadata);
// .text() agar 1 elemeent h toh ek element de dega otherwise
// array of elements return kra dega
// similarly p tag ke liye
let p = $("p");

let pkadata = p.text();
console.log(pkadata);

// select element that is inside another element
// ul ke andar p
let ulKaP = $("ul p");
console.log(ulkaP.text());

// select a class
let classElem = $(".class-name");
console.log(classElem.text());

// select element with both classes
let combinedElement = $(".class1 .class2");
console.log(combinedElement.text());

// select elements on basis of id
let idElem = $("#id-name");
console.log(idElem.text());