const cheerio = require('cheerio')
const blankLayer = require('./blank-layer')
const populateLayer = require('./populate-layer')
const populateConsonantLayer = require('./populate-consonant-layer')
const getConsonantLayer = require('./get-consonant-layer')
const getShinAndSinLayer = require('./get-shin-and-sin-layer')
const getDageshLayer = require('./get-dagesh-layer')
const getVowelLayer = require('./get-vowel-layer')
const config = require('../../../config')
// const shared = require('../../utils/shared')

const clone = $ => {
  return cheerio.load($.html(), config.cheerioOptions)
}

const getLayers = (obj, encodedSyllables) => {
  let $
  $ = blankLayer(obj.counts.consonants, obj.unaccentedSounds)
  $ = populateLayer($, encodedSyllables, obj.stress)
  $ = populateConsonantLayer($, obj.word, obj.counts.consonants)

  getConsonantLayer(obj, clone($))
  getShinAndSinLayer(obj, clone($))
  getDageshLayer(obj, clone($))
  getVowelLayer(obj, clone($))

  // const strHtml = $('body').html()
  // shared.logPrettyHtml(strHtml)
}

module.exports = getLayers
