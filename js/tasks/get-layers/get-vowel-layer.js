const {find} = require('lodash')
const hebrewChars = require('../../hebrew-chars')
const consonantChars = hebrewChars.consonants.map(consonant => consonant.char)
const plainConsonantChars = [...consonantChars, 'ש']

const getVowelLayer = (obj, $) => {

  $('.layer-chunk').addClass('vowel-layer')

  let i = 0

  const chars = obj.word.split('')
  chars.forEach(char => {
    const isConsonant = plainConsonantChars.includes(char)
    if (isConsonant) i++
    const vowel = find(hebrewChars.simpleVowels, {char})
    if (vowel) {
      const chunk = $(`.letter-${i} .content-chunk`)
      chunk.text(chunk.text() + vowel.char)
    }
  })

  obj.layers.vowel = $('body').html()
}

module.exports = getVowelLayer
