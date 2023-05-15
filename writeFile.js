let fs = require('fs')

let dataa = {
    name: 'Bob'
}

fs.writeFile('dataa.json', JSON.stringify(dataa), (err) => {
    console.log('write finished', err)
})