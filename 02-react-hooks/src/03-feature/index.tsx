import { useEffect, useState } from "react";
import "./styles.css";
import { calculateWinner, type Board, type SquareValue } from "./utils";

type GameState = {
  currentMove: number;
  history: Board[];
};

const STORAGE_KEY = "savedGame";

const createEmptyBoard = (): Board => [
  ["", "", ""],
  ["", "", ""],
  ["", "", ""],
];

const initialState: GameState = {
  currentMove: 0,
  history: [createEmptyBoard()],
};

const cloneBoard = (board: Board): Board => board.map((row) => [...row]);

const isBoard = (value: unknown): value is Board => {
  if (!Array.isArray(value) || value.length !== 3) {
    return false;
  }

  return value.every(
    (row) =>
      Array.isArray(row) &&
      row.length === 3 &&
      row.every((cell) => cell === "" || cell === "X" || cell === "O"),
  );
};

const getInitialState = (): GameState => {
  const saved = localStorage.getItem(STORAGE_KEY);

  if (!saved) {
    return initialState;
  }

  try {
    const parsed = JSON.parse(saved) as unknown;

    if (isBoard(parsed)) {
      return {
        currentMove: 0,
        history: [parsed],
      };
    }

    if (
      typeof parsed === "object" &&
      parsed !== null &&
      "currentMove" in parsed &&
      "history" in parsed
    ) {
      const { currentMove, history } = parsed as {
        currentMove: unknown;
        history: unknown;
      };

      if (
        typeof currentMove === "number" &&
        Array.isArray(history) &&
        history.length > 0 &&
        history.every(isBoard) &&
        currentMove >= 0 &&
        currentMove < history.length
      ) {
        return {
          currentMove,
          history,
        };
      }
    }

    return initialState;
  } catch {
    return initialState;
  }
};

function Feature03() {
  const [gameState, setGameState] = useState(getInitialState);
  const { currentMove, history } = gameState;
  const squares = history[currentMove];
  const currentPlayer: Exclude<SquareValue, ""> =
    currentMove % 2 === 0 ? "X" : "O";
  const winner = calculateWinner(squares);
  const isDraw = !winner && currentMove === 9;

  const handleClick = (rowIndex: number, colIndex: number) => {
    setGameState((currentState) => {
      const currentSquares = currentState.history[currentState.currentMove];

      if (
        calculateWinner(currentSquares) ||
        currentSquares[rowIndex][colIndex]
      ) {
        return currentState;
      }

      const nextSquares = cloneBoard(currentSquares);
      const nextPlayer: Exclude<SquareValue, ""> =
        currentState.currentMove % 2 === 0 ? "X" : "O";

      nextSquares[rowIndex][colIndex] = nextPlayer;

      const nextHistory = [
        ...currentState.history.slice(0, currentState.currentMove + 1),
        nextSquares,
      ];

      return {
        currentMove: nextHistory.length - 1,
        history: nextHistory,
      };
    });
  };

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(gameState));
  }, [gameState]);

  const handleRestartGame = () => {
    setGameState({
      currentMove: 0,
      history: [createEmptyBoard()],
    });
  };

  const jumpToMove = (moveIndex: number) => {
    setGameState((currentState) => ({
      ...currentState,
      currentMove: moveIndex,
    }));
  };

  return (
    <div className="game">
      <div className="game-board">
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
      </div>

      <aside className="history">
        <h3 className="history-title">History</h3>
        <ol className="history-list">
          {history.map((_, moveIndex) => {
            const description =
              moveIndex === 0 ? "Go to game start" : `Go to move #${moveIndex}`;

            return (
              <li key={moveIndex}>
                <button
                  type="button"
                  className={`history-button ${
                    moveIndex === currentMove ? "active" : ""
                  }`}
                  onClick={() => jumpToMove(moveIndex)}
                >
                  {moveIndex === currentMove ? `You are at ${description}` : description}
                </button>
              </li>
            );
          })}
        </ol>
      </aside>
    </div>
  );
}

export default Feature03;
