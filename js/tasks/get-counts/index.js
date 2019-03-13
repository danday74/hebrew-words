const hebrewChars = require('../../hebrew-chars')
const consonantIds = hebrewChars.consonants.map(consonant => consonant.id)
const complexVowelIds = hebrewChars.complexVowels.map(complexVowel => complexVowel.id)
const allConsonantIds = [...consonantIds, ...complexVowelIds]

const getCounts = (obj, encodedWord) => {

  let consonantCount = 0
  let prevChar

  const chars = encodedWord.split('')
  chars.forEach(char => {
    if (allConsonantIds.includes(char) && prevChar !== char) consonantCount++
    prevChar = char
  })

  obj.counts = {
    consonants: consonantCount,
    syllables: obj.syllables.length
  }
}

module.exports = getCounts
