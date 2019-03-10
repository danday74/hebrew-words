const {find} = require('lodash')
const utils = require('../../utils/utils')
const hebrewChars = require('../../hebrew-chars')
const all = hebrewChars.allIncComplexVowels

const getTransliteration = (obj, encodedSyllables) => {

  const transliterations = []

  encodedSyllables.forEach(encodedSyllable => {
    const ids = encodedSyllable.split('')
    ids.forEach(id => {
      const char = find(all, {id})
      transliterations.push(char.trans)
    })
  })

  const cp = utils.cartesianProduct(transliterations)
  obj.transliterations = cp.map(transliteration => transliteration.join(''))
}

module.exports = getTransliteration
