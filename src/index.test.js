/* eslint-env mocha */
import { expect, dom } from 'firenpm/mochaccino'
import { sayHello } from '../lib/index'

describe('sayHello', () => {
  beforeEach(() => {
    dom.create()
    sayHello()
  })

  afterEach(() => {
    dom.destroy()
  })

  it('it adds <p> element to <body> in the document', () => {
    expect(document.querySelectorAll('p').length).toEqual(1)
  })
})
