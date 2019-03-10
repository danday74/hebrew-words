const hebrewChars = require('../../hebrew-chars')
const shared = require('../../utils/shared')
const consonants = hebrewChars.consonants
const simpleVowels = hebrewChars.simpleVowels
const nonVowels = hebrewChars.nonVowels

const replaceTheRest = word => {
  word = shared.replaceCharsWithIds(word, simpleVowels)
  word = shared.replaceCharsWithIds(word, nonVowels)
  word = shared.replaceCharsWithIds(word, consonants)
  return word
}

module.exports = replaceTheRest
