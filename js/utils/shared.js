const {find} = require('lodash')
const beautifyHtml = require('js-beautify').html
const hebrewChars = require('../hebrew-chars')
const all = hebrewChars.allIncComplexVowels

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

const getSyllableVowelPattern = syllable => {
  const ids = syllable.split('')
  const vp = ids.map(id => {
    const letter = find(all, {id})
    return letter.type
  }).join('')
  return vp
}

const isSyllableOpen = syllable => {
  const vp = getSyllableVowelPattern(syllable)
  return vp === 'CV' || vp === 'CNCV'
}

// noinspection JSUnusedGlobalSymbols
const shared = {
  logPrettyHtml,
  getStressObj,
  isSyllableOpen
}

module.exports = shared
