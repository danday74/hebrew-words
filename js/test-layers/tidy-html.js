const beautifyHtml = require('js-beautify').html
const beautifyOptions = {indent_size: 0, preserve_newlines: false}
const config = require('../../config')

const tidyHtml = strHtml => {
  const tidy = beautifyHtml(strHtml, beautifyOptions)
  const tidier = tidy.replace(new RegExp(config.testSep, 'g'), '')
  return tidier.replace(/(\r\n|\n|\r)/g, '')
}

module.exports = tidyHtml
