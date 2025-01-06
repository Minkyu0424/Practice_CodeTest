const fs = require('fs')
const a = fs.readFileSync(0).toString().trim()

console.log((+a+1.5).toFixed(2))