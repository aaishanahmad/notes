// file system
const fs = require("node:fs")


const fcontents = fs.readFileSync('./hello.txt',"utf-8");

console.log(fcontents)
