import { useEffect, useState } from "react";
import "./styles.css";
import { calculateWinner, type Board, type SquareValue } from "./utils";

const initialState: Board = [
  ["", "", ""],
  ["", "", ""],
  ["", "", ""],
];

const STORAGE_KEY = "savedBoard";

const getInitialState = () => {
  const saved = localStorage.getItem(STORAGE_KEY);
  if (!saved) {
    return initialState;
  }
  try {
    return JSON.parse(saved) as Board;
  } catch {
    return initialState;
  }
};

function Feature03() {
  const [squares, setSquares] = useState(getInitialState);
  const movesCount = squares.flat().filter(Boolean).length;
  const currentPlayer: Exclude<SquareValue, ""> =
    movesCount % 2 === 0 ? "X" : "O";
  const winner = calculateWinner(squares);
  const isDraw = !winner && movesCount === 9;

  const handleClick = (rowIndex: number, colIndex: number) => {
    if (winner || squares[rowIndex][colIndex]) {
      return;
    }

    const nextSquares = squares.map((row) => [...row]);
    nextSquares[rowIndex][colIndex] = currentPlayer;

    setSquares(nextSquares);
  };

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(squares));
  }, [squares]);

  const handleRestartGame = () => {
    setSquares(initialState);
  };

  return (
    <>
      <div className="board">
        <h2 className="status">
          {winner
            ? `Winner: ${winner}`
            : isDraw
              ? "Draw!"
              : `Next player: ${currentPlayer}`}
        </h2>
        {squares.map((row, rowIndex) => {
          return (
            <div key={rowIndex} className="row">
              {row.map((el, colIndex) => (
                <button
                  key={colIndex}
                  className="square"
                  onClick={() => handleClick(rowIndex, colIndex)}
                >
                  {el}
                </button>
              ))}
            </div>
          );
        })}
      </div>
      <div className="footer">
        <button type="button" onClick={handleRestartGame}>
          Restart
        </button>
      </div>
    </>
  );
}
export default Feature03;
