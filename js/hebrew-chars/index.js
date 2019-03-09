const consonants = require('./consonants')
const simpleVowels = require('./vowels-simple')
const complexVowels = require('./vowels-complex')
const nonVowels = require('./non-vowels')
const dagesh = {
  id: 'O',
  name: 'dagesh',
  char: 'ּ',
  sounds: [''],
  trans: null
}

const allExcComplexVowels = [...consonants, ...simpleVowels, ...nonVowels, dagesh]
const allIncComplexVowels = [...consonants, ...simpleVowels, ...nonVowels, dagesh, ...complexVowels]
const begadKepat = consonants.filter(char => char.begadKepat)

module.exports = {
  dagesh,
  consonants,
  simpleVowels,
  complexVowels,
  nonVowels,
  allExcComplexVowels,
  allIncComplexVowels,
  begadKepat
}
