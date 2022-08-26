import { useState, useEffect, useCallback } from "react";
import { width, sumOfThree, sumOfFour, sumOfFive, sumOfMove, firstRow } from "./BasicVariables";
import GameBoard from "./GameBoard";
import ScoreBoard from "./components/ScoreBoard";
import blank from './images/blank.png';
import useSound from 'use-sound';
import Combo3 from './sounds/Combo-Sound3.mp3';
import Combo4 from './sounds/Combo-Sound4.mp3';
import Combo5 from './sounds/Combo-Sound5.mp3';
import LevelFailed from './sounds/Level-Failed.mp3';
import LevelCompleted from './sounds/Level-Completed.mp3';
import CreateNewItem from "./CreateNewItem";
import LevelEnd from "./components/LevelEnd";

const App = () => {
  const [currentColorArrangement, setCurrentColorArrangement] = useState([]);
  const [itemBeingDragged, setItemBeingDragged] = useState(null);
  const [itemBeingReplaced, setItemBeingReplaced] = useState(null);
  const [scoreDisplay, setScoreDisplay] = useState(0);
  //const [littleBonusDisplay, setLittleBonusDisplay] = useState(0);
  //const [bigBonusDisplay, setBigBonusDisplay] = useState(0);
  const [allMoves, setallMoves] = useState(10);
  const [earnedCoins, setEarnedCoins] = useState(0);
  const [playSound_3] = useSound(Combo3);
  const [playSound_4] = useSound(Combo4);
  const [playSound_5] = useSound(Combo5);
  const [level_failed] = useSound(LevelFailed);
  const [level_completed] = useSound(LevelCompleted);

  GameBoard(setCurrentColorArrangement);

  const checkForColumnOfFive = useCallback(() => {
    for (let i = 0; i <= sumOfFive; i++) {
      const columnOfFive = [i, i + width, i + width * 2, i + width * 3, i + width * 4];
      const decidedColor = currentColorArrangement[i];
      const isBlank = currentColorArrangement[i] === blank;

      if (columnOfFive.every(square => currentColorArrangement[square] === decidedColor && !isBlank)) {
        playSound_5();
        setScoreDisplay((score) => score + 50);
        //setBigBonusDisplay((bonus_5) => bonus_5 + 1);
        columnOfFive.forEach(square => currentColorArrangement[square] = blank);
        return true;
      }
    }
  }, [currentColorArrangement, playSound_5]);

  const checkForRowOfFive = useCallback(() => {
    for (let i = 0; i < width * width; i++) {
      const rowOfFour = [i, i + 1, i + 2, i + 3, i + 4];
      const decidedColor = currentColorArrangement[i];
      const notValid = [4, 5, 6, 7, 12, 13, 14, 15, 20, 21, 22, 23, 28, 29, 30, 31,
        36, 37, 38, 39, 44, 45, 46, 47, 52, 53, 54, 55, 61, 62, 63, 64];
      const isBlank = currentColorArrangement[i] === blank;

      if (notValid.includes(i)) continue;

      if (rowOfFour.every(square => currentColorArrangement[square] === decidedColor && !isBlank)) {
        playSound_5();
        setScoreDisplay((score) => score + 50);
        //setBigBonusDisplay((bonus_5) => bonus_5 + 1);
        rowOfFour.forEach(square => currentColorArrangement[square] = blank);
        return true;
      }
    }
  }, [currentColorArrangement, playSound_5]);

  const checkForColumnOfFour = useCallback(() => {
    for (let i = 0; i <= sumOfFour; i++) {
      const columnOfThree = [i, i + width, i + width * 2, i + width * 3];
      const decidedColor = currentColorArrangement[i];
      const isBlank = currentColorArrangement[i] === blank;

      if (columnOfThree.every(square => currentColorArrangement[square] === decidedColor && !isBlank)) {
        playSound_4();
        setScoreDisplay((score) => score + 40);
        //setLittleBonusDisplay((bonus_4) => bonus_4 + 1);
        columnOfThree.forEach(square => currentColorArrangement[square] = blank);
        return true;
      }
    }
  }, [currentColorArrangement, playSound_4]);

  const checkForRowOfFour = useCallback(() => {
    for (let i = 0; i < width * width; i++) {
      const rowOfFour = [i, i + 1, i + 2, i + 3];
      const decidedColor = currentColorArrangement[i];
      const notValid = [5, 6, 7, 13, 14, 15, 21, 22, 23, 29, 30, 31, 37, 38, 39, 45, 46, 47, 53, 54, 55, 62, 63, 64];
      const isBlank = currentColorArrangement[i] === blank;

      if (notValid.includes(i)) continue;

      if (rowOfFour.every(square => currentColorArrangement[square] === decidedColor && !isBlank)) {
        playSound_4();
        setScoreDisplay((score) => score + 40);
        //setLittleBonusDisplay((bonus_4) => bonus_4 + 1);
        rowOfFour.forEach(square => currentColorArrangement[square] = blank);
        return true;
      }
    }
  }, [currentColorArrangement, playSound_4]);

  const checkForColumnOfThree = useCallback(() => {
    for (let i = 0; i <= sumOfThree; i++) {
      const columnOfThree = [i, i + width, i + width * 2];
      const decidedColor = currentColorArrangement[i];
      const isBlank = currentColorArrangement[i] === blank;

      if (columnOfThree.every(square => currentColorArrangement[square] === decidedColor && !isBlank)) {
        playSound_3();
        setScoreDisplay((score) => score + 30);
        columnOfThree.forEach(square => currentColorArrangement[square] = blank);
        return true;
      }
    }
  }, [currentColorArrangement, playSound_3]);

  const checkForRowOfThree = useCallback(() => {
    for (let i = 0; i < width * width; i++) {
      const rowOfThree = [i, i + 1, i + 2];
      const decidedColor = currentColorArrangement[i];
      const notValid = [6, 7, 14, 15, 22, 23, 30, 31, 38, 39, 46, 47, 54, 55, 63, 64];
      const isBlank = currentColorArrangement[i] === blank;

      if (notValid.includes(i)) continue;

      if (rowOfThree.every(square => currentColorArrangement[square] === decidedColor && !isBlank)) {
        playSound_3();
        setScoreDisplay((score) => score + 30);
        rowOfThree.forEach(square => currentColorArrangement[square] = blank);
        return true;
      }
    }
  }, [currentColorArrangement, playSound_3]);

  const moveIntoSquareBelow = useCallback(() => {
    for (let i = 0; i < sumOfMove; i++) {
      const isFirstRow = firstRow.includes(i);

      if (isFirstRow && currentColorArrangement[i] === blank) {
        currentColorArrangement[i] = CreateNewItem();
      }

      if (currentColorArrangement[i + width] === blank) {
        currentColorArrangement[i + width] = currentColorArrangement[i];
        currentColorArrangement[i] = blank;
      }
    }
  }, [currentColorArrangement]);

  const dragStart = (e) => {
    setItemBeingDragged(e.target);
  };

  const dragDrop = (e) => {
    setItemBeingReplaced(e.target);
  };

  const dragEnd = () => {
    const itemBeingDraggedId = parseInt(itemBeingDragged.getAttribute('data-id'));
    const itemBeingReplacedId = parseInt(itemBeingReplaced.getAttribute('data-id'));

    currentColorArrangement[itemBeingReplacedId] = itemBeingDragged.getAttribute('src');
    currentColorArrangement[itemBeingDraggedId] = itemBeingReplaced.getAttribute('src');

    const validMoves = [
      itemBeingDraggedId - 1,
      itemBeingDraggedId - width,
      itemBeingDraggedId + 1,
      itemBeingDraggedId + width
    ];

    const validMove = validMoves.includes(itemBeingReplacedId);

    const isAColumnOfFive = checkForColumnOfFive();
    const isARowOfFive = checkForRowOfFive();
    const isAColumnOfFour = checkForColumnOfFour();
    const isARowOfFour = checkForRowOfFour();
    const isAColumnOfThree = checkForColumnOfThree();
    const isARowOfThree = checkForRowOfThree();

    if (validMove &&
      (isAColumnOfThree || isARowOfThree || isAColumnOfFour || isARowOfFour || isAColumnOfFive || isARowOfFive)) {
      if (allMoves >= 1 && scoreDisplay < 500) {
        setallMoves((moves) => moves - 1);
      } else if (allMoves >= 1 && scoreDisplay >= 500) {
        setEarnedCoins((coins) => coins + Math.floor(scoreDisplay / 100) * 10);
        level_completed();
        setallMoves(0);
        document.getElementById('gameBoard').style.display = "none";
        document.getElementById('levelEnd').style.display = "flex";
        //alert("YOU WON! :) Level 1 COMPLETED!!!")
      } else {
        level_failed();
      }

      setItemBeingDragged(null);
      setItemBeingReplaced(null);
    } else {
      currentColorArrangement[itemBeingReplacedId] = itemBeingReplaced.getAttribute('src');
      currentColorArrangement[itemBeingDraggedId] = itemBeingDragged.getAttribute('src');
      setCurrentColorArrangement([...currentColorArrangement]);
    }
  };

  useEffect(() => {
    const timer = setInterval(() => {
      checkForColumnOfFive();
      checkForRowOfFive();
      checkForColumnOfFour();
      checkForRowOfFour();
      checkForColumnOfThree();
      checkForRowOfThree();
      moveIntoSquareBelow();
      setCurrentColorArrangement([...currentColorArrangement]);
    }, 100);

    return () => clearInterval(timer);
  }, [checkForColumnOfFive, checkForRowOfFive, checkForColumnOfFour, checkForRowOfFour,
    checkForColumnOfThree, checkForRowOfThree, moveIntoSquareBelow, currentColorArrangement]);

  return (
    <div className="app">
      <div className="scoreBoard">
        <ScoreBoard
          score={scoreDisplay}
          moves={allMoves}
        />
      </div>
      <div className="game">
        <div id="gameBoard">
          {currentColorArrangement.map((color, index) => (
            <img
              key={index}
              src={color}
              alt={color}
              data-id={index}
              draggable={true}
              onDragStart={dragStart}
              onDragOver={(e) => e.preventDefault()}
              onDragEnter={(e) => e.preventDefault()}
              onDragLeave={(e) => e.preventDefault()}
              onDrop={dragDrop}
              onDragEnd={dragEnd}
            />
          ))}
        </div>
        <div className="levelEnd" id="levelEnd">
          <LevelEnd score={scoreDisplay} coins={earnedCoins} />
        </div>
      </div>
    </div>
  );
}

export default App;
