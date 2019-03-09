const chai = require('chai')
const expect = chai.expect

const example = require('./hebrew-words')

describe('hebrew words', () => {

  it('non hebrew word', () => {
    const word = 'test'
    const value = example(word)
    expect(value).to.eql({
      word,
      ok: false,
      error: 'Non Hebraic character - t - detected in word'
    })
  })
})
