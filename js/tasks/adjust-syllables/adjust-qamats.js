const {find} = require('lodash')
const utils = require('../../utils/utils')
const shared = require('../../utils/shared')
const hebrewChars = require('../../hebrew-chars')
const simpleVowels = hebrewChars.simpleVowels
const qamats = find(simpleVowels, {name: 'qamats'})
const plainQamats = hebrewChars.plainQamats
const qamatsQatan = hebrewChars.qamatsQatan

const adjustQamats = (syllables, syllable, idx, stress) => {

  const vp = shared.getVowelPattern(syllable)
  const open = vp === 'CV'
  const penultimate = syllables.length === idx + 2
  const ultimate = syllables.length === idx + 1
  let accented = null
  if (stress === 'penultimate') accented = penultimate
  if (stress === 'ultimate') accented = ultimate

  const ids = syllable.split('')

  ids.forEach((id, i) => {
    if (id === qamats.id) {
      if (accented === false && !open) {
        syllable = utils.strReplaceAtPos(syllable, i, qamatsQatan.id)
      }
      if (accented === true || open) {
        syllable = utils.strReplaceAtPos(syllable, i, plainQamats.id)
      }
    }
  })

  return syllable
}

module.exports = adjustQamats
