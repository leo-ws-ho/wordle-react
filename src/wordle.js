import React, { useState, useEffect } from "react";
import "./index.css";

function PreviousGuess(props) {
  return (
    <div className="guess">
      {props.word.split("").map((item, i) => (
        <Tile letter={item} key={i}/>
      ))}
    </div>
  );
}

function PreviousGuesses(props) {
  let content = null;

  let guesses = [...props.words];

  content = guesses.map((guess, i) => {
    return <PreviousGuess word={guess} key={i} />;
  });

  return <div>{content}</div>;
}

function Guess(props) {
  const result = [];
  for (let i = 0; i < 5; i++) {
    if (props.word[i]) {
      result.push(<Tile letter={props.word[i]} key={i}/>);
    } else {
      result.push(<Tile letter="" key={i} />);
    }
  }
  return (
    <div className="guess">
      {result}
    </div>
  );
}

function Tile(props) {
  return <span className="tile">{props.letter}</span>;
}

// <Key val='Q' />
function Key(props) {
  const handleClick = (event) => {
    props.addLetter(props.val);
  }

  return (
    <span onClick={handleClick} className="key">
      <div >{props.val}</div>
    </span>
  );
}

function Keyboard(props) {
  const keys = ["QWERTYUIOP", "ASDFGHJKL", "ZXCVBNM"];

  return (
    <div>
      <div className="keyrow">
        {keys[0].split("").map((letter) => (
          <Key key={letter} val={letter} addLetter={props.addLetter}/>
        ))}
      </div>
      <div className="keyrow">
        {keys[1].split("").map((letter) => (
          <Key key={letter} val={letter} addLetter={props.addLetter} />
        ))}
      </div>
      <div className="keyrow">
        {keys[2].split("").map((letter) => (
          <Key key={letter} val={letter} addLetter={props.addLetter} />
        ))}
      </div>
    </div>
  );
}

function EmptyLines(props) {
  const numLines = props.numLines;
  const results = [];
  for (let i = 0; i < numLines; i++) {
    results[i] = <Guess word={""} key={i} ></Guess>;
  }
  return <React.Fragment>{results}</React.Fragment>;
}

function Game(props) {
  const [previousGuesses, setPreviousGuesses] = useState(['GUESS', 'HELLO']);
  const [currentGuess, setCurrentGuess] = useState("");
  const numEmptyLines = 3;


  const addLetter = (letter) => {
    setCurrentGuess(currentGuess + letter);
  };

  return (
    <div className="board">
      <PreviousGuesses words={previousGuesses} />
      <Guess word={currentGuess} />
      {/* <EmptyLines numLines={numEmptyLines} /> */}
      <Keyboard addLetter={addLetter}/>
    </div>
  );
}

export default Game;
