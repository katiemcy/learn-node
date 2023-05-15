// let _ = require('lodash')

// console.log(_.random(1,100))

let fs = require('fs')
let data = require('./data.json')

console.log(data.name)

fs.readFile('./data.json', 'utf-8', (err, data) => {
    let data = JSON.parse(data)
    console.log(data.name)
})