const {map} = require('lodash')
let consonants = require('./consonants')
let simpleVowels = require('./vowels-simple')
let complexVowels = require('./vowels-complex')
let nonVowels = require('./non-vowels')
const dagesh = {
  id: 'O',
  name: 'dagesh',
  char: 'ּ',
  sounds: [''],
  trans: null
}

consonants = map(consonants, x => {
  x.type = 'C'
  return x
})

simpleVowels = map(simpleVowels, x => {
  x.type = 'V'
  return x
})

complexVowels = map(complexVowels, x => {
  x.type = 'V'
  return x
})

nonVowels = map(nonVowels, x => {
  x.type = 'N'
  return x
})

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
