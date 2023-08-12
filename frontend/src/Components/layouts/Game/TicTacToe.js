import React, { useState } from "react";

export default function TicTacToe() {
  const [winner, setWinner] = useState("");
  const [count, setCount] = useState(1);

  const [char, setChar] = useState("Player 1");
  const [matrix, setMatrix] = useState([
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
  ]);

  const getBGClass = (value) => {
    if (value === "Player 1") return "x";
    if (value === "Player 2") return "o";
    return "bg-white";
  };

  const checkWinner = () => {
    //row
    if (
      matrix[0][0] &&
      matrix[0][0] === matrix[0][1] &&
      matrix[0][1] === matrix[0][2]
    ) {
      setWinner(matrix[0][0] + " is winner");
    }
    if (
      matrix[1][0] &&
      matrix[1][0] === matrix[1][1] &&
      matrix[1][1] === matrix[1][2]
    ) {
      setWinner(matrix[1][0] + " is winner");
    }
    if (
      matrix[2][0] &&
      matrix[2][0] === matrix[2][1] &&
      matrix[2][1] === matrix[2][2]
    ) {
      setWinner(matrix[2][0] + " is winner");
    }

    //col

    if (
      matrix[0][0] &&
      matrix[0][0] === matrix[1][0] &&
      matrix[1][0] === matrix[2][0]
    ) {
      setWinner(matrix[0][0] + " is winner");
    }
    if (
      matrix[0][1] &&
      matrix[0][1] === matrix[1][1] &&
      matrix[1][1] === matrix[2][1]
    ) {
      setWinner(matrix[0][1] + " is winner");
    }
    if (
      matrix[0][2] &&
      matrix[0][2] === matrix[1][2] &&
      matrix[1][2] === matrix[2][2]
    ) {
      setWinner(matrix[0][2] + " is winner");
    }

    //diagonal

    if (
      matrix[0][0] &&
      matrix[0][0] === matrix[1][1] &&
      matrix[1][1] === matrix[2][2]
    ) {
      setWinner(matrix[0][0] + " is winner");
    }
    if (
      matrix[0][2] &&
      matrix[0][2] === matrix[1][1] &&
      matrix[1][1] === matrix[2][0]
    ) {
      setWinner(matrix[0][2] + " is winner");
    }
    if (count === 9) {
      setWinner("Match Drawn");
    }
  };

  const handleClick = (r, c) => {
    if (matrix[r][c]) return;
    const tmpMatrix = [...matrix];
    tmpMatrix[r][c] = char;
    setMatrix(tmpMatrix);
    setChar(char === "Player 1" ? "Player 2" : "Player 1");
    setCount(count + 1);
    checkWinner();
  };

  return (
    <div className="w-full h-screen text-black bg-stone-800">
      <h2 className="text-center text-3xl font-light text-stone-600 py-3">
        Tic Tac Toe
      </h2>

      <div className="w-full h-full  text-center flex-col ">
        {!winner && <p className="text-xl text-white pt-2">{char} turn</p>}
        <div className="flex h-4/6 items-center justify-center">
          <div className="">
            {winner ? (
              <>
                {" "}
                <p className="text-2xl text-white ">{winner}</p>
              </>
            ) : (
              matrix.map((row, rIndex) => (
                <div className="row flex " key={rIndex}>
                  {row.map((cell, cIndex) => (
                    <div
                    key={cIndex}
                      onClick={() => handleClick(rIndex, cIndex)}
                      className={`w-[100px] h-[100px] md:w-[150px] md:h-[150px] border-2 border-black flex items-center justify-center ${getBGClass(
                        cell
                      )}`}
                    >
                      {/* {matrix[rIndex][cIndex]} */}
                    </div>
                  ))}
                </div>
              ))
            )}
          </div>
        </div>

        <div className="w-full h-1/6">
          <button
            onClick={() => {
              setWinner("");
              setCount(1);
              setChar("Player 1")
              setMatrix([
                ["", "", ""],
                ["", "", ""],
                ["", "", ""],
              ]);
            }}
            className="text-md text-white glass p-2 rounded-md"
          >
            Restart Game
          </button>
        </div>
      </div>
    </div>
  );
}
