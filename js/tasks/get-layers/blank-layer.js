const {range} = require('lodash')
const cheerio = require('cheerio')
const config = require('../../../config')

const blankLayer = (consonantCount, unaccentedSounds) => {

  const indices = range(consonantCount)

  const $ = cheerio.load('<span class="layer-chunk"></span>', config.cheerioOptions)

  const layerChunk = $('.layer-chunk')
  const sep = config.sep

  indices.forEach(i => {
    layerChunk.append(
      `<span class="letter-chunk letter-${i + 1}${sep}">` +
      `<span class="consonant-chunk${sep}">` +
      `<span class="shin-and-sin-chunk${sep}">` +
      `<span class="dagesh-chunk${sep}">` +
      `<span class="vowel-chunk${sep}">` +
      `<span class="content-chunk${sep}">` +
      '</span></span></span></span></span></span>'
    )
  })

  unaccentedSounds.forEach(unaccentedSound => {
    layerChunk.addClass(unaccentedSound)
  })

  return $
}

module.exports = blankLayer
