const {find} = require('lodash')
const hebrewChars = require('../../hebrew-chars')
const all = hebrewChars.allIncComplexVowels

const getSyllables = (obj, encodedSyllables) => {
  const syllables = encodedSyllables.map(encodedSyllable => {
    const ids = encodedSyllable.split('')
    const syllable = ids.map(id => {
      const char = find(all, {id})
      return char.char
    }).join('')
    return syllable
  })
  // obj.syllables = syllables
}

module.exports = getSyllables
