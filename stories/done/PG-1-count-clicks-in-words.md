---
id: PG-1
title: Say how many times the counter was clicked, in words that agree with the number
tier: normal
kind: product
depends_on: []
model: null
blocked: null
---

## Intent

As someone using the app, I want the counter button to say how many times it was clicked in a
plain sentence, so that it reads naturally at every count.

## Acceptance criteria

- [x] **AC-1** — `counterLabel` (`src/counter.js`) returns `Clicked 0 times` for 0,
      `Clicked 1 time` for 1, and `Clicked <n> times` for any other whole number `n`, such as
      `Clicked 2 times` and `Clicked 12 times`.
- [x] **AC-2** — `counterLabel` throws a `RangeError` for a negative number or a number that is not
      whole, such as `-1` or `1.5`.
- [x] **AC-3** — `src/counter.test.js` covers AC-1 and AC-2, with each test named after its AC
      (`PG-1/AC-1: ...`), and replaces the test of the old wording. `npm test` passes.
- [x] **AC-4** — The counter button in `src/App.jsx` still shows `counterLabel(count)`, and nothing
      else in `src/App.jsx` changes.

## Out of scope

- Any other change to the app's layout, styles or text.
- Languages other than English.

## Constraints

*(none)*

## Context

- `src/counter.js` — `counterLabel`, which today returns `Count is <n>`.
- `src/counter.test.js` — its Vitest test.

## Open questions

*(none)*
