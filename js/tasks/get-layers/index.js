const blankLayer = require('./blank-layer')
const shared = require('../../utils/shared')

const getLayers = (obj, encodedSyllables) => {
  const $ = blankLayer(obj.counts.consonants, obj.unaccentedSounds)
  const strHtml = $('body').html()
  shared.logPrettyHtml(strHtml)
}

module.exports = getLayers
