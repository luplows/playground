/** The text on the counter button, for a count of clicks. */
export function counterLabel(count) {
  if (!Number.isInteger(count) || count < 0) {
    throw new RangeError('Click count must be a nonnegative whole number')
  }

  return `Clicked ${count} ${count === 1 ? 'time' : 'times'}`
}
