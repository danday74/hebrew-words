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
  trans: [null]
}
const silentSheva = {
  id: 'ɇ',
  name: 'silent-sheva',
  char: 'ְ',
  sounds: [''],
  trans: ['']
}
const plainQamats = {
  id: 'ā',
  name: 'qamats',
  char: 'ָ',
  sounds: ['a'],
  trans: ['ā'],
  short: false
}
const qamatsQatan = {
  id: 'o',
  name: 'qamats-qatan',
  char: 'ָ',
  sounds: ['o'],
  trans: ['o'],
  short: true
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

const allExcComplexVowels = [...consonants, ...simpleVowels, ...nonVowels, dagesh, silentSheva, plainQamats, qamatsQatan]
const allIncComplexVowels = [...consonants, ...simpleVowels, ...nonVowels, dagesh, silentSheva, plainQamats, qamatsQatan, ...complexVowels]
const begadKepat = consonants.filter(char => char.begadKepat)

module.exports = {
  dagesh,
  silentSheva,
  plainQamats,
  qamatsQatan,
  consonants,
  simpleVowels,
  complexVowels,
  nonVowels,
  allExcComplexVowels,
  allIncComplexVowels,
  begadKepat
}
