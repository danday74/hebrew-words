const {find} = require('lodash')
const hebrewChars = require('../../hebrew-chars')
const simpleVowels = hebrewChars.simpleVowels
const nonVowels = hebrewChars.nonVowels

const getStress = (obj, word, encodedWord, stressOnPenultimateSyllable) => {

  if (stressOnPenultimateSyllable !== true && stressOnPenultimateSyllable !== false) stressOnPenultimateSyllable = null

  if (word.endsWith('ַיִם')) {
    stressOnPenultimateSyllable = true
    obj.notes.push('ends with ayim')
  }

  const fromEnd1 = encodedWord.charAt(encodedWord.length - 1)
  const fromEnd2 = encodedWord.charAt(encodedWord.length - 2)
  const fromEnd3 = encodedWord.charAt(encodedWord.length - 3)
  const fromEnd4 = encodedWord.charAt(encodedWord.length - 4)
  const fromEnd5 = encodedWord.charAt(encodedWord.length - 5)

  const segol = find(simpleVowels, {name: 'segol'})
  const sheva = find(nonVowels, {name: 'sheva'})

  if (fromEnd2 === segol.char && fromEnd4 === segol.char || fromEnd1 === sheva.char && fromEnd3 === segol.char && fromEnd5 === segol.char) {
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
