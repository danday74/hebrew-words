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

  it('sha-lom             completeness, soundness', () => {
    const word = 'שָׁלוֹם'
    const actual = hebrewWords(word)
    const expected = {
      word,
      notes: [],
      layers: [],
      counts: {
        consonants: 4,
        syllables: 2,
        chars: 7
      },
      stress: null,
      syllables: ['שָׁ', 'לוֹם'],
      sounds: ['sha-lom'],
      unaccentedSounds: ['sha-lom'],
      transliterations: ['šālôm'],
      ok: true,
      error: null
    }
    expect(actual).to.eql(expected)
  })

  it('eesh-sha            woman, wife', () => {
    const word = 'אִשָּׁה'
    const actual = hebrewWords(word)
    const expected = {
      word,
      notes: [],
      layers: [],
      counts: {
        consonants: 3,
        syllables: 2,
        chars: 7
      },
      stress: null,
      syllables: ['אִשׁ', 'שָׁה'],
      sounds: ['eesh-sha'],
      unaccentedSounds: ['eesh-sha'],
      transliterations: ['’iššāh'],
      ok: true,
      error: null
    }
    expect(actual).to.eql(expected)
  })

  it('heeg-geed           he declared, he told', () => {
    const word = 'הִגִּיד'
    const actual = hebrewWords(word)
    const expected = {
      word,
      notes: [],
      layers: [],
      counts: {
        consonants: 4,
        syllables: 2,
        chars: 7
      },
      stress: null,
      syllables: ['הִגּ', 'גִּיד'],
      sounds: ['heeg-geed'],
      unaccentedSounds: ['heeg-geed'],
      transliterations: ['higgîḏ'],
      ok: true,
      error: null
    }
    expect(actual).to.eql(expected)
  })

  it('meesh-kan           dwelling place, tabernacle', () => {
    const word = 'מִשְׁכָּן'
    const actual = hebrewWords(word)
    const expected = {
      word,
      notes: [],
      layers: [],
      counts: {
        consonants: 4,
        syllables: 2,
        chars: 9
      },
      stress: null,
      syllables: ['מִשְׁ', 'כָּן'],
      sounds: ['meesh-kan', 'meesh-kon'],
      unaccentedSounds: ['meesh-kan', 'meesh-kon'],
      transliterations: ['miškān', 'miškon'],
      ok: true,
      error: null
    }
    expect(actual).to.eql(expected)
  })

  it('mal-ach             messenger, angel', () => {
    const word = 'מַלְאָךְ'
    const actual = hebrewWords(word)
    const expected = {
      word,
      notes: [],
      layers: [],
      counts: {
        consonants: 4,
        syllables: 2,
        chars: 8
      },
      stress: null,
      syllables: ['מַלְ', 'אָךְ'],
      sounds: ['mal-ach', 'mal-och'],
      unaccentedSounds: ['mal-ach', 'mal-och'],
      transliterations: ['mal’āḵ', 'mal’oḵ'],
      ok: true,
      error: null
    }
    expect(actual).to.eql(expected)
  })

  it('nechó-shet          copper, bronze   (no stress info)', () => {
    const word = 'נְחֹשֶׁת'
    const actual = hebrewWords(word)
    const expected = {
      word,
      notes: [],
      layers: [],
      counts: {
        consonants: 4,
        syllables: 2,
        chars: 8
      },
      stress: null,
      syllables: ['נְחֹ', 'שֶׁת'],
      sounds: ['necho-shet'],
      unaccentedSounds: ['necho-shet'],
      transliterations: ['nəḥōšeṯ'],
      ok: true,
      error: null
    }
    expect(actual).to.eql(expected)
  })

  it('nechó-shet          copper, bronze   (with stress info)', () => {
    const word = 'נְחֹשֶׁת'
    const actual = hebrewWords(word, true)
    const expected = {
      word,
      notes: [],
      layers: [],
      counts: {
        consonants: 4,
        syllables: 2,
        chars: 8
      },
      stress: 'penultimate',
      syllables: ['נְחֹ', 'שֶׁת'],
      sounds: ['nechó-shet'],
      unaccentedSounds: ['necho-shet'],
      transliterations: ['nəḥṓšeṯ'],
      ok: true,
      error: null
    }
    expect(actual).to.eql(expected)
  })

  it('shená-yeem          two', () => {
    const word = 'שְׁנַיִם'
    const actual = hebrewWords(word)
    const expected = {
      word,
      notes: ['ends with ayim'],
      layers: [],
      counts: {
        consonants: 4,
        syllables: 2,
        chars: 8
      },
      stress: 'penultimate',
      syllables: ['שְׁנַ', 'יִם'],
      sounds: ['shená-yeem'],
      unaccentedSounds: ['shena-yeem'],
      transliterations: ['šənáyim'],
      ok: true,
      error: null
    }
    expect(actual).to.eql(expected)
  })

  it('choch-ma            wisdom   (no stress info)', () => {
    const word = 'חָכְמָה'
    const actual = hebrewWords(word)
    const expected = {
      word,
      notes: [],
      layers: [],
      counts: {
        consonants: 4,
        syllables: 2,
        chars: 7
      },
      stress: null,
      syllables: ['חָכְ', 'מָה'],
      sounds: ['chach-ma', 'choch-ma'],
      unaccentedSounds: ['chach-ma', 'choch-ma'],
      transliterations: ['ḥāḵmāh', 'ḥoḵmāh'],
      ok: true,
      error: null
    }
    expect(actual).to.eql(expected)
  })

  it('choch-ma            wisdom   (with stress info)', () => {
    const word = 'חָכְמָה'
    const actual = hebrewWords(word, false)
    const expected = {
      word,
      notes: [],
      layers: [],
      counts: {
        consonants: 4,
        syllables: 2,
        chars: 7
      },
      stress: 'ultimate',
      syllables: ['חָכְ', 'מָה'],
      sounds: ['choch-ma'],
      unaccentedSounds: ['choch-ma'],
      transliterations: ['ḥoḵmāh'],
      ok: true,
      error: null
    }
    expect(actual).to.eql(expected)
  })

  it('né-fesh             soul, person, living being', () => {
    const word = 'נֶפֶשׁ'
    const actual = hebrewWords(word)
    const expected = {
      word,
      notes: ['segolette'],
      layers: [],
      counts: {
        consonants: 3,
        syllables: 2,
        chars: 6
      },
      stress: 'penultimate',
      syllables: ['נֶ', 'פֶשׁ'],
      sounds: ['né-fesh'],
      unaccentedSounds: ['ne-fesh'],
      transliterations: ['néꝑeš'],
      ok: true,
      error: null
    }
    expect(actual).to.eql(expected)
  })

  it('yeroo-sha-lá-yeem   Jerusalem', () => {
    const word = 'יְרוּשָׁלַיִם'
    const actual = hebrewWords(word)
    const expected = {
      word,
      notes: ['ends with ayim'],
      layers: [],
      counts: {
        consonants: 7,
        syllables: 4,
        chars: 13
      },
      stress: 'penultimate',
      syllables: ['יְרוּ', 'שָׁ', 'לַ', 'יִם'],
      sounds: ['yeroo-sha-lá-yeem'],
      unaccentedSounds: ['yeroo-sha-la-yeem'],
      transliterations: ['yərûšāláyim'],
      ok: true,
      error: null
    }
    expect(actual).to.eql(expected)
  })

  it('chav-va             Eve', () => {
    const word = 'חַוָּה'
    const actual = hebrewWords(word)
    const expected = {
      word,
      notes: [],
      layers: [],
      counts: {
        consonants: 3,
        syllables: 2,
        chars: 6
      },
      stress: null,
      syllables: ['חַו', 'וָה'],
      sounds: ['chav-va'],
      unaccentedSounds: ['chav-va'],
      transliterations: ['ḥawwāh'],
      ok: true,
      error: null
    }
    expect(actual).to.eql(expected)
  })

  it('na-sa             he lifted, he carried', () => {
    const word = 'נָשָׂא'
    const actual = hebrewWords(word)
    const expected = {
      word,
      notes: [],
      layers: [],
      counts: {
        consonants: 3,
        syllables: 2,
        chars: 6
      },
      stress: null,
      syllables: ['נָ', 'שָׂא'],
      sounds: ['na-sa', 'na-so'],
      unaccentedSounds: ['na-sa', 'na-so'],
      transliterations: ['nāśā’', 'nāśo’'],
      ok: true,
      error: null
    }
    expect(actual).to.eql(expected)
  })
})
