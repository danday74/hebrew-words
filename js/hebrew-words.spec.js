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

  it('sha-lom     completeness, soundness', () => {
    const word = 'שָׁלוֹם'
    const actual = hebrewWords(word)
    const expected = {
      word,
      ok: true,
      error: null
    }
    expect(actual).to.eql(expected)
  })

  it('eesh-sha    woman, wife', () => {
    const word = 'אִשָּׁה'
    const actual = hebrewWords(word)
    const expected = {
      word,
      ok: true,
      error: null
    }
    expect(actual).to.eql(expected)
  })

  it('heeg-geed   he declared, he told', () => {
    const word = 'הִגִּיד'
    const actual = hebrewWords(word)
    const expected = {
      word,
      ok: true,
      error: null
    }
    expect(actual).to.eql(expected)
  })

  it('meesh-kan   dwelling place, tabernacle', () => {
    const word = 'מִשְׁכָּן'
    const actual = hebrewWords(word)
    const expected = {
      word,
      ok: true,
      error: null
    }
    expect(actual).to.eql(expected)
  })
})
