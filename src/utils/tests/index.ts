import { assert } from 'chai'

export const interpretTheCode = (code: string, taskNumber: number): boolean => {
  switch (taskNumber) {
    case 4:
      return eval(`
        ${code}
        const relevantTest = ${t4}
        relevantTest([reference, type])`)
    case 14:
      return eval(`
      ${code}
      const relevantTest = ${t14}
      relevantTest(defaultTo)`)
    case 16:
      return eval(`
      ${code}
      const relevantTest = ${t16}
      relevantTest(compareWithPrecision)`)
    case 18:
      return eval(`
      ${code}
      const relevantTest = ${t18}
      relevantTest(Capitalize)`)
    case 19:
      return eval(`
      ${code}
      const relevantTest = ${t19}
      relevantTest(reverseLongWords)`)
    case 21:
      return eval(`
      ${code}
      const relevantTest = ${t21}
      relevantTest(wrapInParagraph)`)
    default:
      return false
  }
}

const t4 = (functionsArray: Array<() => void>): boolean => {
  try {
    assert.throws(functionsArray[0], ReferenceError)
    assert.throws(functionsArray[1], TypeError)
    return true
    console.log('passed')
  } catch (e) {
    console.error(e + ' /chai')
    return false
  }
}

const t14 = (func: <T, U>(arg1: T, arg2: U) => T | U) => {
  try {
    assert.equal(func(NaN, 1), 1, 'default from NaN')
    assert.equal(func(null, 77), 77, 'default from null')
    assert.equal(func(undefined, 13), 13, 'default from undefined')
    assert.equal(func('string', 0), 'string', 'value from string')
    assert.equal(func(10, 1), 10, 'value from number')
    return true
  } catch (e) {
    console.error(e + ' /chai')
    return false
  }
}

const t16 = (func: (a: number, b: number, precision: number) => boolean) => {
  try {
    assert.equal(func(0.1 + 0.2, 0.3, 0.0001), true, '0.1 + 0.2, 0.3, 0.0001 should return true')
    assert.equal(func(0.4 + 0.2, 0.3, 0.0001), false, '0.1 + 0.2, 0.3, 0.0001 should return true')
    assert.equal(func(228, 16, 0.0001), false, '0.1 + 0.2, 0.3, 0.0001 should return true')
    assert.equal(func(2, 2, 0.0001), true, '0.1 + 0.2, 0.3, 0.0001 should return true')

    return true
  } catch (e) {
    console.error(e + ' /chai')
    return false
  }
}

const t18 = (func: (str: string) => string) => {
  try {
    assert.equal(func('sOme RanDoM sTRING'), 'Some Random String', 'Testing on sOme RanDoM sTRING')
    assert.equal(func('test string z'), 'Test String Z', 'Testing on test string z')
    assert.equal(func('Normal String'), 'Normal String', 'Testing on Normal String')
    assert.equal(func('ALL CAPITAL'), 'All Capital', 'Testing on ALL CAPITAL')

    return true
  } catch (e) {
    console.error(e + ' /chai')
    return false
  }
}

const t19 = (func: (str: string) => string) => {
  try {
    assert.equal(func('Hey fellow warriors'), 'Hey wollef sroirraw', 'Hey fellow warriors')
    assert.equal(func('This is a test'), 'This is a test', 'Testing on This is a test')
    assert.equal(
      func('This is another test'),
      'This is rehtona test',
      'Testing on This is another test'
    )
    return true
  } catch (e) {
    console.error(e + ' /chai')
    return false
  }
}

const t21 = (func: (str: string) => string) => {
  try {
    assert.equal(
      func(`Some
simple multiline
text`),
      `<p>Some</p>
<p>simple multiline</p>
<p>text</p>`,
      'Hey fellow warriors'
    )

    return true
  } catch (e) {
    console.error(e + ' /chai')
    return false
  }
}
