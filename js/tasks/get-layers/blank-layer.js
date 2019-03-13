const {range} = require('lodash')
const cheerio = require('cheerio')

const blankLayer = (consonantCount, unaccentedSounds) => {

  const indices = range(consonantCount)

  const $ = cheerio.load('<span class="layer-chunk"></span>')

  const layerChunk = $('.layer-chunk')

  indices.forEach(i => {
    layerChunk.append(
      `<span class="letter-chunk letter-${i + 1}">` +
      '<span class="consonant-chunk">' +
      '<span class="shin-and-sin-chunk">' +
      '<span class="dagesh-chunk">' +
      '<span class="vowel-chunk">' +
      '<span class="content-chunk">' +
      '</span></span></span></span></span></span>'
    )
  })

  unaccentedSounds.forEach(unaccentedSound => {
    layerChunk.addClass(unaccentedSound)
  })

  return $
}

module.exports = blankLayer
