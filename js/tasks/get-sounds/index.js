const {find} = require('lodash')
const utils = require('../../utils/utils')
const hebrewChars = require('../../hebrew-chars')
const all = hebrewChars.allIncComplexVowels

const getSounds = (obj, encodedSyllables) => {

  const sounds = []

  encodedSyllables.forEach((encodedSyllable, i) => {
    const penultimate = encodedSyllables.length === i + 2
    const ultimate = encodedSyllables.length === i + 1
    const ids = encodedSyllable.split('')

    ids.forEach(id => {
      const char = find(all, {id})
      if (penultimate && obj.stress === 'penultimate' && char.type === 'V') {
        sounds.push(char.soundsAccent)
      } else {
        sounds.push(char.sounds)
      }
    })
    if (!ultimate) sounds.push(['-'])
  })

  const cp = utils.cartesianProduct(sounds)
  obj.sounds = cp.map(sound => sound.join(''))
}

module.exports = getSounds
