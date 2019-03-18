const {find} = require('lodash')
const hebrewChars = require('../../hebrew-chars')
const RECOGNISED_VOWEL_PATTERNS = ['CV', 'CVC', 'CVCN']

const findByIdOrChar = item => {
  return find(hebrewChars.allExcComplexVowels, {id: item}) || find(hebrewChars.allExcComplexVowels, {char: item})
}

const encodeSyllables = encodedWord => {

  let currentSyllableVP = ''
  let currentSyllable = ''
  const syllables = []

  while (encodedWord.length) {

    const lastItem = encodedWord.slice(-1)
    const last2Items = encodedWord.slice(-2)

    const oneLetterChar = findByIdOrChar(lastItem)
    const complexVowel = find(hebrewChars.complexVowels, {char: last2Items})

    if (!complexVowel) {
      currentSyllableVP = oneLetterChar.type + currentSyllableVP
      currentSyllable = oneLetterChar.id + currentSyllable
      encodedWord = encodedWord.slice(0, -1)
    } else {
      if (currentSyllableVP.charAt(0) === 'V') {
        currentSyllableVP = oneLetterChar.type + currentSyllableVP
        currentSyllable = oneLetterChar.id + currentSyllable
        encodedWord = encodedWord.slice(0, -1)
      } else {
        currentSyllableVP = complexVowel.type + currentSyllableVP
        currentSyllable = complexVowel.id + currentSyllable
        encodedWord = encodedWord.slice(0, -2)
      }
    }

    if (RECOGNISED_VOWEL_PATTERNS.includes(currentSyllableVP)) {

      const lastItem = encodedWord.charAt(encodedWord.length - 1)
      const secondLastItem = encodedWord.charAt(encodedWord.length - 2)
      const thirdLastItem = encodedWord.charAt(encodedWord.length - 3)

      const lastChar = findByIdOrChar(lastItem)
      const secondLastChar = findByIdOrChar(secondLastItem)
      const thirdLastChar = findByIdOrChar(thirdLastItem)

      if (lastChar && secondLastChar && lastChar.type === 'N' && secondLastChar.type === 'C' && !thirdLastChar) {
        currentSyllable = secondLastChar.id + lastChar.id + currentSyllable
        encodedWord = encodedWord.slice(0, -2)
      }

      syllables.unshift(currentSyllable)
      currentSyllableVP = ''
      currentSyllable = ''
    }
  }

  if (currentSyllableVP !== '') throw Error('Unrecognised vowel pattern')

  return syllables
}

module.exports = encodeSyllables
