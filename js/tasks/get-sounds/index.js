const {find} = require('lodash')
const hebrewChars = require('../../hebrew-chars')
const all = hebrewChars.allIncComplexVowels
const shared = require('../../utils/shared')
const utils = require('../../utils/utils')
const getSounds = (obj, encodedSyllables) => {

  const sounds = []

  encodedSyllables.forEach((encodedSyllable, i) => {
    const lastSyllable = encodedSyllables.length === i + 1
    const vp = shared.getVowelPattern(encodedSyllable)
    const ids = encodedSyllable.split('')
    ids.forEach((id, j) => {
      const lastId = ids.length === j + 1
      const char = find(all, {id})
      if (char.name === 'sheva' && lastId) {
        // do nothing
      } else if (char.name === 'qamats' && vp === 'CV') {
        sounds.push([char.sounds[0]])
      } else {
        sounds.push(char.sounds)
      }
    })
    if (!lastSyllable) sounds.push(['-'])
  })

  const cp = utils.cartesianProduct(sounds)
  obj.sounds = cp.map(sound => sound.join(''))
}

module.exports = getSounds
