import { describe, expect, it } from 'vitest'
import { counterLabel } from './counter.js'

describe('counterLabel', () => {
  it.each([
    [0, 'Clicked 0 times'],
    [1, 'Clicked 1 time'],
    [2, 'Clicked 2 times'],
    [3, 'Clicked 3 times'],
    [12, 'Clicked 12 times'],
  ])('PG-1/AC-1: labels %s clicks as "%s"', (count, expected) => {
    expect(counterLabel(count)).toBe(expected)
  })

  it.each([-1, -12, 1.5, -0.5, NaN, Infinity, -Infinity])(
    'PG-1/AC-2: rejects invalid click count %s',
    (count) => {
      expect(() => counterLabel(count)).toThrow(RangeError)
    },
  )
})
