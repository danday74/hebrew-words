const {reduce} = require('lodash')
const shared = require('../../utils/shared')

const encodeSyllables = encodedWord => {

  let vp = shared.getVowelPattern(encodedWord)

  const syllableVPs = []

  let currentSyllableVP = ''
  let isDone = false
  while (vp.length || !isDone) {
    if (!currentSyllableVP.length) {
      isDone = false
      if (vp.endsWith('CV')) {
        currentSyllableVP = 'CV'
        vp = vp.slice(0, -2)
      } else if (vp.endsWith('CVC')) {
        currentSyllableVP = 'CVC'
        vp = vp.slice(0, -3)
      } /* istanbul ignore else */ else if (vp.endsWith('CVCN')) {
        currentSyllableVP = 'CVCN'
        vp = vp.slice(0, -4)
      } else {
        throw Error('Unrecognised vowel pattern at stage one')
      }
    } else {
      isDone = true
      const endVP = vp.slice(-3)
      if (!vp.endsWith('N') || endVP.includes('V')) {
        syllableVPs.unshift(currentSyllableVP)
        currentSyllableVP = ''
      } /* istanbul ignore else */ else if (vp.endsWith('N') && vp.length === 2) {
        currentSyllableVP = vp + currentSyllableVP
        syllableVPs.unshift(currentSyllableVP)
        vp = ''
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
