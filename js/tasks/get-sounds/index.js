const {find} = require('lodash')
const utils = require('../../utils/utils')
const hebrewChars = require('../../hebrew-chars')
const all = hebrewChars.allIncComplexVowels

const getSounds = (obj, encodedSyllables) => {

  const sounds = []

  encodedSyllables.forEach((encodedSyllable, i) => {
    const lastSyllable = encodedSyllables.length === i + 1
    const ids = encodedSyllable.split('')
    ids.forEach(id => {
      const char = find(all, {id})
      sounds.push(char.sounds)
    })
    if (!lastSyllable) sounds.push(['-'])
  })

  const cp = utils.cartesianProduct(sounds)
  obj.sounds = cp.map(sound => sound.join(''))
}

module.exports = getSounds
