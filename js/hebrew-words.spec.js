const chai = require('chai')
const expect = chai.expect

const hebrewWords = require('./hebrew-words')

describe('hebrew words', () => {

  it('non hebrew word', () => {
    const word = 'test'
    const actual = hebrewWords(word)
    const expected = {
      word,
      ok: false,
      error: 'Non Hebraic character - t - detected in word'
    }
    expect(actual).to.eql(expected)
  })

  it('sha-lom   completeness, soundness', () => {
    const word = 'שָׁלוֹם'
    const actual = hebrewWords(word)
    const expected = {
      word,
      consonants: ['shin', 'lamed', 'vav', 'mem-final'],
      ok: true,
      error: null
    }
    expect(actual).to.eql(expected)
  })

  it('eesh-sha   woman, wife', () => {
    const word = 'אִשָּׁה'
    const actual = hebrewWords(word)
    const expected = {
      word,
      consonants: ['alef', 'shin', 'heh'],
      ok: true,
      error: null
    }
    expect(actual).to.eql(expected)
  })
})
