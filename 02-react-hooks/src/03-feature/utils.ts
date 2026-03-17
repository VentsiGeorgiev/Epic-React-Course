export type SquareValue = "" | "X" | "O";
export type Board = SquareValue[][];

export function calculateWinner(squares: Board): SquareValue | null {
  const lines = [
    [
      [0, 0],
      [0, 1],
      [0, 2],
    ],
    [
      [1, 0],
      [1, 1],
      [1, 2],
    ],
    [
      [2, 0],
      [2, 1],
      [2, 2],
    ],
    [
      [0, 0],
      [1, 0],
      [2, 0],
    ],
    [
      [0, 1],
      [1, 1],
      [2, 1],
    ],
    [
      [0, 2],
      [1, 2],
      [2, 2],
    ],
    [
      [0, 0],
      [1, 1],
      [2, 2],
    ],
    [
      [0, 2],
      [1, 1],
      [2, 0],
    ],
  ] as const;

  for (const [[aRow, aCol], [bRow, bCol], [cRow, cCol]] of lines) {
    const cell = squares[aRow][aCol];

    if (cell && cell === squares[bRow][bCol] && cell === squares[cRow][cCol]) {
      return cell;
    }
  }

  return null;
}
