const hebrewChars = require('../../hebrew-chars')
const utils = require('../../utils')
const consonants = hebrewChars.consonants
const simpleVowels = hebrewChars.simpleVowels
const nonVowels = hebrewChars.nonVowels

const replaceTheRest = word => {
  word = utils.replaceCharsWithIds(word, simpleVowels)
  word = utils.replaceCharsWithIds(word, nonVowels)
  word = utils.replaceCharsWithIds(word, consonants)
  return word
}

module.exports = replaceTheRest
