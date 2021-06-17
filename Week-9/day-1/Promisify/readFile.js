'use strict'

const fs = require('fs')
const pfs = fs.promises

async function readFile(filePath){
    let textbuffer = await pfs.readFile(filePath)
    return textbuffer.toString()
}
    let data = readFile('text.txt')
    data.then((text) => console.log(text))