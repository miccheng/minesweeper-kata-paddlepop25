import mineSweeper from './minesweeper'

test('Empty input returns empty response', () => {
  const result = mineSweeper(0, 0, [])
  const expected = []

  expect(result).toEqual(expected)
})

test('Empty grid with no mines', () => {
  const result = mineSweeper(3, 2, [])
  const expected = [
    '...',
    '...'
  ]

  expect(result).toEqual(expected)
})

test('3 x 2 grid with 1 mine', () => {
  const result = mineSweeper(3, 2, [
    '.*.',
    '...'
  ])
  const expected = [
    '1*1',
    '111'
  ]

  expect(result).toEqual(expected)
})

test('5 x 3 grid with 3 mine', () => {
  const result = mineSweeper(5, 3, [
    '**...',
    '.....',
    '.*...'
  ])
  const expected = [
    '**1..',
    '332..',
    '1*1..'
  ]

  expect(result).toEqual(expected)
})