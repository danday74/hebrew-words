const strReplaceAtPos = (str, idx, char) => {
  str = str.split('')
  str[idx] = char
  str = str.join('')
  return str
}

const debugWord = (word, msg = null) => {
  /* istanbul ignore next */
  if (msg) console.log(msg)
  word = word.split('')
  word.forEach((char, i) => {
    console.log(i, char)
  })
}

const utils = {
  strReplaceAtPos,
  debugWord
}

module.exports = utils
