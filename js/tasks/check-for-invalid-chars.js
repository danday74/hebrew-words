const {flatten, map} = require('lodash')
const hebrewChars = require('../hebrew-chars')

const checkForInvalidChars = word => {

  const allChars = flatten(map(hebrewChars.all, 'char'))

  let ok = true
  let error = null

  for (let i = 0; i < word.length; i++) {
    const char = word[i]
    if (!allChars.includes(char)) {
      ok = false
      error = `Non Hebraic character - ${char} - detected in word`
      break
    }
  }

  return {
    word,
    ok,
    error
  }
}

module.exports = checkForInvalidChars
