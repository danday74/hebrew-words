const hebrewChars = require('../../hebrew-chars')
const consonantChars = hebrewChars.consonants.map(consonant => consonant.char)
const plainConsonantChars = [...consonantChars, 'ש']
const dagesh = hebrewChars.dagesh

const getDageshLayer = (obj, $) => {

  $('.layer-chunk').addClass('dagesh-layer')

  let i = 0

  const chars = obj.word.split('')
  chars.forEach(char => {
    const isConsonant = plainConsonantChars.includes(char)
    if (isConsonant) i++
    if (char === dagesh.char) {
      const chunk = $(`.letter-${i} .content-chunk`)
      chunk.text(chunk.text() + dagesh.char)
    }
  })

  // obj.layers.dagesh = $('body').html()
}

module.exports = getDageshLayer
