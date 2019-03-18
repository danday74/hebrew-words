const {find} = require('lodash')
const hebrewChars = require('../../hebrew-chars')
const simpleVowels = hebrewChars.simpleVowels

const getStress = (obj, word, encodedWord, stressOnPenultimateSyllable) => {

  if (stressOnPenultimateSyllable !== true && stressOnPenultimateSyllable !== false) stressOnPenultimateSyllable = null

  if (word.endsWith('ַיִם')) {
    stressOnPenultimateSyllable = true
    obj.notes.push('ends with ayim')
  }

  const fromEnd2 = encodedWord.charAt(encodedWord.length - 2)
  const fromEnd4 = encodedWord.charAt(encodedWord.length - 4)
  const segol = find(simpleVowels, {name: 'segol'})

  if (fromEnd2 === segol.char && fromEnd4 === segol.char) {
    stressOnPenultimateSyllable = true
    obj.notes.push('segolette')
  }

  if (stressOnPenultimateSyllable != null) {
    obj.stress = stressOnPenultimateSyllable ? 'penultimate' : 'ultimate'
  } else {
    obj.stress = null
  }
}

module.exports = getStress
