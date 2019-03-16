const beautifyHtml = require('js-beautify').html
const {find} = require('lodash')
const hebrewChars = require('../hebrew-chars')
const all = hebrewChars.allIncComplexVowels

const replaceCharsWithIds = (word, array) => {
  const chars = word.split('')
  word = chars.map(char => {
    const vowel = find(array, {char})
    return vowel ? vowel.id : char
  }).join('')
  return word
}

const getVowelPattern = encoded => {
  const ids = encoded.split('')
  const vp = ids.map(id => {
    const letter = find(all, {id})
    return letter.type
  }).join('')
  return vp
}

/* istanbul ignore next */
const logPrettyHtml = strHtml => {
  const prettyHtml = beautifyHtml(strHtml, {indent_size: 2, inline: []})
  console.log(prettyHtml)
}

const getStressObj = (syllables, idx, stress) => {
  const penultimate = syllables.length === idx + 2
  const ultimate = syllables.length === idx + 1
  let accented = null
  if (stress === 'penultimate') accented = penultimate
  if (stress === 'ultimate') accented = ultimate
  if (!penultimate && !ultimate) accented = false
  return {penultimate, ultimate, accented}
}

const isSyllableOpen = syllable => {
  const vp = getVowelPattern(syllable)
  return vp === 'CV' || vp === 'CNCV'
}

// noinspection JSUnusedGlobalSymbols
const shared = {
  replaceCharsWithIds,
  getVowelPattern,
  logPrettyHtml,
  getStressObj,
  isSyllableOpen
}

module.exports = shared
