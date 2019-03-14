const blankLayer = require('./blank-layer')
const populateLayer = require('./populate-layer')
const consonantLayer = require('./consonant-layer')
const shared = require('../../utils/shared')

const getLayers = (obj, encodedSyllables) => {
  let $
  $ = blankLayer(obj.counts.consonants, obj.unaccentedSounds)
  $ = populateLayer($, encodedSyllables, obj.stress)
  $ = consonantLayer($, encodedSyllables)
  const strHtml = $('body').html()
  shared.logPrettyHtml(strHtml)
}

module.exports = getLayers
