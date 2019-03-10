const assert = require('assert')
const {filter, map, uniq} = require('lodash')
const hebrewChars = require('./js/hebrew-chars')

console.log('chars with 2 letters')
let charsWith2Letters
charsWith2Letters = filter(hebrewChars.allIncComplexVowels, x => x.char.length !== 1)
charsWith2Letters = map(charsWith2Letters, 'name')
console.log(charsWith2Letters)

console.log('ensure IDs are unique')
const ids = map(hebrewChars.allIncComplexVowels, 'id')
const uniqueIds = uniq(ids)
assert.strictEqual(ids.length, uniqueIds.length)
console.log('assertion passed, IDs are unique')
