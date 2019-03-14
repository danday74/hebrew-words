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
  trans: [null],
  type: null,
  subType: null,
  typeName: null
}
const silentSheva = {
  id: 'ɇ',
  name: 'silent-sheva',
  char: 'ְ',
  sounds: [''],
  trans: [''],
  type: 'N',
  subType: 'N',
  typeName: 'non-vowel'
}
const plainQamats = {
  id: 'ā',
  name: 'qamats',
  char: 'ָ',
  sounds: ['a'],
  trans: ['ā'],
  short: false,
  soundsAccent: ['á'],
  transAccent: ['́ā'],
  type: 'V',
  subType: 'S',
  typeName: 'simple-vowel'
}
const qamatsQatan = {
  id: 'o',
  name: 'qamats-qatan',
  char: 'ָ',
  sounds: ['o'],
  trans: ['o'],
  short: true,
  soundsAccent: ['ó'],
  transAccent: ['ó'],
  type: 'V',
  subType: 'S',
  typeName: 'simple-vowel'
}

consonants = map(consonants, x => {
  x.type = 'C'
  x.subType = 'C'
  x.typeName = 'consonant'
  return x
})

simpleVowels = map(simpleVowels, x => {
  x.type = 'V'
  x.subType = 'S'
  x.typeName = 'simple-vowel'
  return x
})

complexVowels = map(complexVowels, x => {
  x.type = 'V'
  x.subType = 'C'
  x.typeName = 'complex-vowel'
  return x
})

nonVowels = map(nonVowels, x => {
  x.type = 'N'
  x.subType = 'N'
  x.typeName = 'non-vowel'
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
