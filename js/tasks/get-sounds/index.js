const {find} = require('lodash')
const hebrewChars = require('../../hebrew-chars')
const all = hebrewChars.allIncComplexVowels
const shared = require('../../utils/shared')
const getSounds = (obj, encodedSyllables) => {

  const sounds = []

  let sound1 = ''

  // build array first like this [1, 1, 1, 2, 1, 1, 3, 1]

  // then from that build this:
  // [1, 1, 1, 1, 1, 1, 1, 1]
  // [1, 1, 1, 1, 1, 1, 2, 1]
  // [1, 1, 1, 1, 1, 1, 3, 1]
  // [1, 1, 1, 2, 1, 1, 1, 1]
  // [1, 1, 1, 2, 1, 1, 2, 1]
  // [1, 1, 1, 2, 1, 1, 3, 1]

  // then build the sounds

  // exclude qamats qatan if syllable is open

  encodedSyllables.forEach((encodedSyllable, i) => {
    const vp = shared.getVowelPattern(encodedSyllable)
    const lastSyllable = encodedSyllables.length === i + 1
    const ids = encodedSyllable.split('')
    ids.forEach((id, j) => {
      const lastId = ids.length === j + 1
      const char = find(all, {id})
      if (char.name === 'sheva' && lastId) {
        // do nothing
      } else if (char.name === 'qamats') {
        if (vp !== 'CV') {
          sounds.push(char.sounds)
          sound1 += char.sounds[0]
        } else {
          sounds.push([char.sounds[0]])
          sound1 += char.sounds[0]
        }
      } else {
        sounds.push(char.sounds)
        sound1 += char.sounds[0]
      }
    })
    if (!lastSyllable) sound1 += '-'
  })

  console.log(sound1)
  console.log(sounds)
}

module.exports = getSounds
