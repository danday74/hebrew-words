const {find} = require('lodash')
const utils = require('../../utils/utils')
const shared = require('../../utils/shared')
const hebrewChars = require('../../hebrew-chars')
const simpleVowels = hebrewChars.simpleVowels
const qamats = find(simpleVowels, {name: 'qamats'})
const plainQamats = hebrewChars.plainQamats
const qamatsQatan = hebrewChars.qamatsQatan

const adjustQamats = (syllables, syllable, idx, stress) => {

  const open = shared.isSyllableOpen(syllable)
  const stressObj = shared.getStressObj(syllables, idx, stress)

  const ids = syllable.split('')

  ids.forEach((id, i) => {
    if (id === qamats.id) {
      if (stressObj.accented === false && !open) {
        syllable = utils.strReplaceAtPos(syllable, i, qamatsQatan.id)
      }
      if (stressObj.accented === true || open) {
        syllable = utils.strReplaceAtPos(syllable, i, plainQamats.id)
      }
    }
  })

  return syllable
}

module.exports = adjustQamats
