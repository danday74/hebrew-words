const {find, map} = require('lodash')
const hebrewChars = require('../../hebrew-chars')
const begadKepatChars = map(hebrewChars.begadKepat, 'char')
const simpleVowelChars = map(hebrewChars.simpleVowels, 'char')
const complexVowelChars = map(hebrewChars.complexVowels, 'char')
const dagesh = hebrewChars.dagesh
const utils = require('../../utils/utils')
const shuruq = find(hebrewChars.complexVowels, {name: 'shuruq'})

const replaceDagesh = word => {

  for (let i = 0; i < word.length; i++) {
    const char = word[i]
    if (char === dagesh.char) {
      const consonantChar = word[i - 1] + dagesh.char
      const simpleVowel = word[i - 2]
      const isSimpleVowelPreceding = simpleVowelChars.includes(simpleVowel)
      const complexVowel = word[i - 3] + word[i - 2]
      const isComplexVowelPreceding = complexVowelChars.includes(complexVowel)
      const isVowelPreceding = isSimpleVowelPreceding || isComplexVowelPreceding

      if (begadKepatChars.includes(consonantChar)) {
        if (isVowelPreceding) {
          const consonant = find(hebrewChars.begadKepat, {char: consonantChar})
          word = utils.strReplaceAtPos(word, i, consonant.id)
          word = utils.strReplaceAtPos(word, i - 1, consonant.id)
        }
      } else if (consonantChar === shuruq.char) {
        if (isVowelPreceding) word = utils.strReplaceAtPos(word, i, word[i - 1])
      } else {
        word = utils.strReplaceAtPos(word, i, word[i - 1])
      }
    }
  }

  // replace weak dagesh
  hebrewChars.begadKepat.forEach(x => {
    const regex = new RegExp(x.char, 'g')
    word = word.replace(regex, x.id)
  })

  return word
}

module.exports = replaceDagesh
