const assert = require('assert')
const {filter, map, uniq} = require('lodash')
const hebrewChars = require('./js/hebrew-chars')

console.log('chars with 2 letters')
let charsWith2Letters
charsWith2Letters = filter(hebrewChars.allIncComplexVowels, x => x.char.length !== 1)
charsWith2Letters = map(charsWith2Letters, 'name')
console.log(charsWith2Letters)

console.log('chars with 2 sounds')
let charsWith2Sounds
charsWith2Sounds = filter(hebrewChars.allIncComplexVowels, x => x.sounds.length !== 1)
charsWith2Sounds = map(charsWith2Sounds, 'name')
console.log(charsWith2Sounds)

console.log('chars with 2 transliterations')
let charsWith2Transliterations
charsWith2Transliterations = filter(hebrewChars.allIncComplexVowels, x => x.trans.length !== 1)
charsWith2Transliterations = map(charsWith2Transliterations, 'name')
console.log(charsWith2Transliterations)

console.log('ensure IDs are unique')
const ids = map(hebrewChars.allIncComplexVowels, 'id')
const uniqueIds = uniq(ids)
assert.strictEqual(ids.length, uniqueIds.length)
console.log('assertion passed, IDs are unique')
