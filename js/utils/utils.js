const {map, flatten, reduce} = require('lodash')

const cartesianProduct = arrays => {
  return reduce(arrays, function (a, b) {
    return flatten(map(a, function (x) {
      return map(b, function (y) {
        return x.concat([y])
      })
    }), true)
  }, [[]])
}

const strReplaceAtPos = (str, idx, char) => {
  str = str.split('')
  str[idx] = char
  str = str.join('')
  return str
}

const utils = {
  cartesianProduct,
  strReplaceAtPos
}

module.exports = utils
