// a modules is an encapsulated and reusable chunk of code that has it own context
// in node js each file is treated as a separate module
// 1.local module
// 2. built in module
// 3. third party module

//1.local module example

const add = require('./add.js') // load the add.js module in index.js

//export function use
console.log(add.hello(1,2))


// 2.built in module example
// import module before you can use
// some main built in module is - fs , paths , events , stream , http
  
const path = require("node:path")

console.log(path.format(path.parse(__filename)))
