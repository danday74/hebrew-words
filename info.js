const {filter, map} = require('lodash')
const hebrewChars = require('./js/hebrew-chars')

console.log('chars with 2 letters')
let charsWith2Letters
charsWith2Letters = filter(hebrewChars.allIncComplexVowels, x => x.char.length !== 1)
charsWith2Letters = map(charsWith2Letters, 'name')
console.log(charsWith2Letters)
