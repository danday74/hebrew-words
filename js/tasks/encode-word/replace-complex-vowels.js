const hebrewChars = require('../../hebrew-chars')
const complexVowels = hebrewChars.complexVowels

const replaceComplexVowels = word => {
  complexVowels.forEach(vowel => {
    const regex = new RegExp(vowel.char, 'g')
    word = word.replace(regex, vowel.id)
  })
  return word
}

module.exports = replaceComplexVowels
