const strReplaceAtPos = (str, idx, char) => {
  str = str.split('')
  str[idx] = char
  str = str.join('')
  return str
}

const utils = {
  strReplaceAtPos
}

module.exports = utils
