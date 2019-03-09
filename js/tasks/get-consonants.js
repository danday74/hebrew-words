const {find} = require('lodash')
const hebrewChars = require('../hebrew-chars')
const consonants = hebrewChars.consonants

const getConsonants = obj => {

  let word = obj.word

  let consonant

  obj.consonants = []

  while (word.length) {
    const char2 = word[0] + word[1]
    consonant = find(consonants, {char: char2})
    if (consonant) {
      obj.consonants.push(consonant.name)
      word = word.substring(2)
    } else {
      const char1 = word[0]
      consonant = find(consonants, {char: char1})
      if (consonant) {
        obj.consonants.push(consonant.name)
      }
      word = word.substring(1)
    }
  }
}

module.exports = getConsonants
