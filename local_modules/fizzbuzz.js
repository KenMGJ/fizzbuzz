var _ = require('lodash')
module.exports = function(n) {
    return {
        fizzbuzz: _.range(1, n + 1).map(function(x,i) {
            if ((i + 1) % 3 === 0) {
                return 'Fizz'
            }
            return x
        }).map(function(x, i) {
            var j = i + 1
            if (j % 5 === 0) {
                return ((j === x) ? '' : x) + 'Buzz'
            }
            return x
        }),

        print: function(perLine) {
            var arrayIndex = 0
            while (arrayIndex < this.fizzbuzz.length) {
                var line = ''
                var m = arrayIndex
                for (var i = 0; i < perLine; i++) {
                    if (i + m === this.fizzbuzz.length) { break }
                    if (i !== 0) { line += ', ' }
                    line += this.fizzbuzz[i + m]
                }
                arrayIndex = m + perLine
                console.log(line)
            }
        }
    }
}
