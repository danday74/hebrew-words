const fs = require('fs')
const tidyHtml = require('../tidy-html')

const shalom = fs.readFileSync(__dirname + '/shalom.html', 'utf8')

const consonant = {
  shalom: tidyHtml(shalom)
}

module.exports = consonant
