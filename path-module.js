const pathName = require('path')

console.log(pathName)

const filePath = pathName.join('/content','subfolder','test.txt')
console.log(filePath)

const base=pathName.basename(filePath)
console.log(base)