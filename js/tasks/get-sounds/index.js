const {find} = require('lodash')
const hebrewChars = require('../../hebrew-chars')
const all = hebrewChars.allIncComplexVowels

const getSounds = (obj, encodedSyllables) => {

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

  encodedSyllables.forEach((encodedSyllable, i) => {
    const lastSyllable = encodedSyllables.length === i + 1
    const ids = encodedSyllable.split('')
    ids.forEach((id, j) => {
      const lastId = ids.length === j + 1
      const char = find(all, {id})
      if (char.sounds.length > 1) console.log('char.sounds', char.sounds)
      if (char.name === 'sheva' && lastId) {
        // do nothing
      } else {
        sound1 += char.sounds[0]
      }
    })
    if (!lastSyllable) sound1 += '-'
  })

  console.log(sound1)
}

module.exports = getSounds
