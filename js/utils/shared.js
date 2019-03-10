const {find} = require('lodash')
const hebrewChars = require('../hebrew-chars')
const all = hebrewChars.allIncComplexVowels

const replaceCharsWithIds = (word, array) => {
  const chars = word.split('')
  word = chars.map(char => {
    const vowel = find(array, {char})
    return vowel ? vowel.id : char
  }).join('')
  return word
}

const getVowelPattern = encoded => {
  const ids = encoded.split('')
  const vp = ids.map(id => {
    const letter = find(all, {id})
    return letter.type
  }).join('')
  return vp
}

const shared = {
  replaceCharsWithIds,
  getVowelPattern
}

module.exports = shared
