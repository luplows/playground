import { describe, expect, it } from 'vitest'
import { counterLabel } from './counter.js'

describe('counterLabel', () => {
  it('names the count', () => {
    expect(counterLabel(0)).toBe('Count is 0')
    expect(counterLabel(3)).toBe('Count is 3')
  })
})
