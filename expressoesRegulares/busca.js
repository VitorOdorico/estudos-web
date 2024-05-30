const fs = require('fs');
const bancoCsv = 'database.csv'
const banco = fs.readFileSync(bancoCsv, "utf-8")


const regex = /Bóris/;

const matchRegex = banco.match(regex)
console.log(matchRegex);