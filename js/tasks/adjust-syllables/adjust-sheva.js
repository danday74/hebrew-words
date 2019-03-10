const {find} = require('lodash')
const utils = require('../../utils/utils')
const hebrewChars = require('../../hebrew-chars')
const nonVowels = hebrewChars.nonVowels
const sheva = find(nonVowels, {name: 'sheva'})
const silentSheva = hebrewChars.silentSheva

const adjustSheva = syllable => {

  const ids = syllable.split('')

  ids.forEach((id, i) => {
    const last = ids.length === i + 1
    if (id === sheva.id && last) {
      syllable = utils.strReplaceAtPos(syllable, i, silentSheva.id)
    }
  })

  return syllable
}

module.exports = adjustSheva
