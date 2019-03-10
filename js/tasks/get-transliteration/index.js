const {find} = require('lodash')
const hebrewChars = require('../../hebrew-chars')
const all = hebrewChars.allIncComplexVowels
const shared = require('../../utils/shared')

const getTransliteration = (obj, encodedSyllables) => {

  const transliterations = []

  encodedSyllables.forEach(encodedSyllable => {
    const vp = shared.getVowelPattern(encodedSyllable)
    const ids = encodedSyllable.split('')
    ids.forEach((id, i) => {
      const lastId = ids.length === i + 1
      const char = find(all, {id})

    })
  })


  console.log(transliterations)
}

module.exports = getTransliteration
