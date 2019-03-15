const getConsonantLayer = (obj, $) => {
  $('.layer-chunk').addClass('consonant-layer')
  obj.layers.consonant = $('body').html()
}

module.exports = getConsonantLayer
