const {find, range} = require('lodash')
const hebrewChars = require('../../hebrew-chars')
const consonants = hebrewChars.consonants

const getShinAndSinLayer = (obj, $) => {

  $('.layer-chunk').addClass('shin-and-sin-layer')

  range(obj.counts.consonants).forEach(i => {

    const shinAndSinChunk = $(`.letter-${i} .shin-and-sin-chunk`)
    const contentChunk = $(`.letter-${i} .content-chunk`)
    if (contentChunk.text() === 'ש') {
      if (shinAndSinChunk.hasClass('shin-dot')) {
        const consonant = find(consonants, {name: 'shin'})
        contentChunk.text(consonant.char)
        /* istanbul ignore else */
      } else if (shinAndSinChunk.hasClass('sin-dot')) {
        const consonant = find(consonants, {name: 'sin'})
        contentChunk.text(consonant.char)
      } else {
        throw Error('Failed to add shin or sin dot')
      }
    }
  })

  // obj.layers.shinAndSin = $('body').html()
}

module.exports = getShinAndSinLayer
