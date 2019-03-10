const {find} = require('lodash')
const hebrewChars = require('../../hebrew-chars')
const all = hebrewChars.allIncComplexVowels
const shared = require('../../utils/shared')
const utils = require('../../utils/utils')

const getTransliteration = (obj, encodedSyllables) => {

  const transliterations = []

  encodedSyllables.forEach(encodedSyllable => {
    const vp = shared.getVowelPattern(encodedSyllable)
    const ids = encodedSyllable.split('')
    ids.forEach((id, i) => {
      const lastId = ids.length === i + 1
      const char = find(all, {id})
      if (char.name === 'sheva' && lastId) {
        // do nothing
      } else if (char.name === 'qamats' && vp === 'CV') {
        transliterations.push([char.trans[0]])
      } else {
        transliterations.push(char.trans)
      }
    })
  })

  const cp = utils.cartesianProduct(transliterations)
  obj.transliterations = cp.map(transliteration => transliteration.join(''))
}

module.exports = getTransliteration
