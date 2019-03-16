const {find} = require('lodash')
const hebrewChars = require('../../hebrew-chars')
const consonantChars = hebrewChars.consonants.map(consonant => consonant.char)
const plainConsonantChars = [...consonantChars, 'ש']
const shin = find(hebrewChars.consonants, {name: 'shin'})
const sin = find(hebrewChars.consonants, {name: 'sin'})

const getShinAndSinLayer = (obj, $) => {

  $('.layer-chunk').addClass('shin-and-sin-layer')

  let i = 0
  let prevChar

  const chars = obj.word.split('')
  chars.forEach(char => {
    const isConsonant = plainConsonantChars.includes(char)
    if (isConsonant) i++
    const contentChunk = $(`.letter-${i} .content-chunk`)
    if (prevChar === 'ש') {
      if (char.charCodeAt(0) === 1473) contentChunk.text(shin.char) // shin dot
      /* istanbul ignore else */
      else if (char.charCodeAt(0) === 1474) contentChunk.text(sin.char) // sin dot
      else throw Error('shin dot or sin dot must follow shin or sin')
    }
    prevChar = char
  })

  // obj.layers.shinAndSin = $('body').html()
}

module.exports = getShinAndSinLayer
