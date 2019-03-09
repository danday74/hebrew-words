const consonants = require('./consonants')
const vowelsSimple = require('./vowels-simple')
const vowelsComplex = require('./vowels-complex')
const nonVowels = require('./non-vowels')
const dagesh = {
  id: 'O',
  name: 'dagesh',
  char: 'ּ',
  sounds: [''],
  trans: null
}

const allExcComplexVowels = [...consonants, ...vowelsSimple, ...nonVowels, dagesh]
const allIncComplexVowels = [...consonants, ...vowelsSimple, ...nonVowels, dagesh, ...vowelsComplex]

module.exports = {
  consonants,
  vowelsSimple,
  vowelsComplex,
  nonVowels,
  allExcComplexVowels,
  allIncComplexVowels
}
