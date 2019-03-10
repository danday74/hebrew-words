const {find, reduce} = require('lodash')
const hebrewChars = require('../../hebrew-chars')
const all = hebrewChars.allIncComplexVowels

const encodeSyllables = encodedWord => {

  // VP means vowel pattern

  const ids = encodedWord.split('')
  let VP = ids.map(id => {
    const letter = find(all, {id})
    return letter.type
  }).join('')

  const syllableVPs = []

  let currentSyllableVP = ''
  let isDone = false
  while (VP.length || !isDone) {
    if (!currentSyllableVP.length) {
      isDone = false
      if (VP.endsWith('CV')) {
        currentSyllableVP = 'CV'
        VP = VP.slice(0, -2)
      } else if (VP.endsWith('CVC')) {
        currentSyllableVP = 'CVC'
        VP = VP.slice(0, -3)
      } /* istanbul ignore else */ else if (VP.endsWith('CVCN')) {
        currentSyllableVP = 'CVCN'
        VP = VP.slice(0, -4)
      } else {
        throw Error('Unrecognised vowel pattern at stage one')
      }
    } else {
      isDone = true
      const endVP = VP.slice(-3)
      if (!VP.endsWith('N') || endVP.includes('V')) {
        syllableVPs.unshift(currentSyllableVP)
        currentSyllableVP = ''
      } /* istanbul ignore else */ else if (VP.endsWith('N') && VP.length === 2) {
        currentSyllableVP = VP + currentSyllableVP
        syllableVPs.unshift(currentSyllableVP)
        VP = ''
      } else {
        throw Error('Unrecognised vowel pattern at stage two')
      }
    }
  }

  let startIdx = 0
  const syllables = reduce(syllableVPs, (acc, syllableVPs) => {
    const length = syllableVPs.length
    const ids = encodedWord.substring(startIdx, startIdx + length)
    startIdx += length
    return [...acc, ids]
  }, [])

  /* istanbul ignore if */
  if (encodedWord !== syllables.join('')) {
    throw Error('Syllables do not match original word')
  }

  return syllables
}

module.exports = encodeSyllables
