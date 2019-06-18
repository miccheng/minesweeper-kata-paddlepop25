import mineSweeper from './minesweeper'

const cases = [
  ['Empty input returns empty response', 0, 0, [], []],
  [
    'Empty grid with no mines', 3, 2, [],
    [
      '...',
      '...'
    ]
  ],
  [
    '3 x 2 grid with 1 mine', 3, 2,
    [
      '.*.',
      '...'
    ],
    [
      '1*1',
      '111'
    ]
  ],
  [
    '5 x 3 grid with 3 mine', 5, 3,
    [
      '**...',
      '.....',
      '.*...'
    ],
    [
      '**1..',
      '332..',
      '1*1..'
    ]
  ]
]

test.each(cases)(
  'mineSweeper() - %s',
  (_, cols, rows, mines, expected) => {
    const result = mineSweeper(cols, rows, mines)
    expect(result).toEqual(expected)
  }
)
