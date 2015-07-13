var fizzbuzz = require('./local_modules/fizzbuzz')
var fizzy = fizzbuzz((process.argv[2]) ? Number(process.argv[2]) : 100)

fizzy.print((process.argv[3]) ? Number(process.argv[3]) : 10)
