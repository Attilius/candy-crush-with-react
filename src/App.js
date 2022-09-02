import { useState, useEffect, useCallback } from "react";
import ScoreBoard from './components/ScoreBoard';
import { colors, width, moves, stripedHorizontal } from "./BasicVariables";
import useSound from 'use-sound';

import Blank from './images/Blank.png';
import Choco from './images/Choco.png';

import Combo3 from './sounds/Combo-Sound3.mp3';
import Combo4 from './sounds/Combo-Sound4.mp3';
import Combo5 from './sounds/Combo-Sound5.mp3';
import LevelFailed from './sounds/Level-Failed.mp3';
import LevelCompleted from './sounds/Level-Completed.mp3';
import SuperColorBomb from './sounds/Super-Color-Bomb.mp3';

import Level_1 from './levels/Level_1';

import LevelWin from "./components/LevelWinBoard";
import LevelLose from "./components/LevelLoseBoard";

const App = () => {
    const [currentColorArrangement, setCurrentColorArrangement] = useState([])
    const [itemBeingDragged, setItemBeingDragged] = useState(null);
    const [itemBeingReplaced, setItemBeingReplaced] = useState(null);
    const [scoreDisplay, setScoreDisplay] = useState(0)
    const [allMoves, setallMoves] = useState(moves);
    const [earnedCoins, setEarnedCoins] = useState(0);
    const [playSound_3] = useSound(Combo3);
    const [playSound_4] = useSound(Combo4);
    const [playSound_5] = useSound(Combo5);
    const [level_failed] = useSound(LevelFailed);
    const [level_completed] = useSound(LevelCompleted);
    const [super_color_bomb] = useSound(SuperColorBomb);

    Level_1(setCurrentColorArrangement);

    const checkForColumnOfFive = useCallback(() => {
        for (let i = 0; i <= 21; i++) {
          const columnOfFive = [i, i + width, i + width * 2, i + width * 3, i + width * 4];
          const decidedColor = currentColorArrangement[i];
          const isBlank = currentColorArrangement[i] === Blank;
    
          if (columnOfFive.every(square => currentColorArrangement[square] === decidedColor && !isBlank)) {
            playSound_5();
            setScoreDisplay((score) => score + 50);
            columnOfFive.forEach(square => currentColorArrangement[square] = Blank);
            return true;
          }
        }
      }, [currentColorArrangement, playSound_5]);
    
      const checkForRowOfFive = useCallback(() => {
        for (let i = 0; i < 48; i++) {
          const rowOfFour = [i, i + 1, i + 2, i + 3, i + 4];
          const decidedColor = currentColorArrangement[i];
          const notValid = [3, 4, 5, 6, 7, 9, 10, 11, 12, 13, 17, 18, 19, 20, 24, 25, 26, 27, 31, 32, 33,
            34, 35, 37, 38, 39, 40, 41, 45, 46, 47, 48];
          const isBlank = currentColorArrangement[i] === Blank;
    
          if (notValid.includes(i)) continue;
    
          if (rowOfFour.every(square => currentColorArrangement[square] === decidedColor && !isBlank)) {
            playSound_5();
            setScoreDisplay((score) => score + 50);
            rowOfFour.forEach(square => currentColorArrangement[square] = Blank);
            return true;
          }
        }
      }, [currentColorArrangement, playSound_5]);
    
      const checkForColumnOfFour = useCallback(() => {
        for (let i = 0; i <= 28; i++) {
          const columnOfThree = [i, i + width, i + width * 2, i + width * 3];
          const decidedColor = currentColorArrangement[i];
          const isBlank = currentColorArrangement[i] === Blank;
    
          if (columnOfThree.every(square => currentColorArrangement[square] === decidedColor && !isBlank)) {
            playSound_4();
            setScoreDisplay((score) => score + 40);
            columnOfThree.forEach(square => currentColorArrangement[square] = Blank);
            return true;
          }
        }
      }, [currentColorArrangement, playSound_4]);
    
      const checkForRowOfFour = useCallback(() => {
        for (let i = 0; i < 48; i++) {
          const rowOfFour = [i, i + 1, i + 2, i + 3];
          const decidedColor = currentColorArrangement[i];
          const notValid = [4, 5, 6, 7, 10, 11, 12, 13, 18, 19, 20, 25, 26, 27, 32, 33, 34, 35, 38, 39, 40, 41, 46, 47, 48];
          const isBlank = currentColorArrangement[i] === Blank;
    
          if (notValid.includes(i)) continue;
    
          if (rowOfFour.every(square => currentColorArrangement[square] === decidedColor && !isBlank)) {
            playSound_4();
            setScoreDisplay((score) => score + 40);
            rowOfFour.forEach(square => currentColorArrangement[square] = Blank);
            return true;
          }
        }
      }, [currentColorArrangement, playSound_4]);
    
      const checkForColumnOfThree = useCallback(() => {
        for (let i = 0; i <= 35; i++) {
          const columnOfThree = [i, i + width, i + width * 2];
          const decidedColor = currentColorArrangement[i];
          const isBlank = currentColorArrangement[i] === Blank;
    
          if (columnOfThree.every(square => currentColorArrangement[square] === decidedColor && !isBlank)) {
            playSound_3();
            setScoreDisplay((score) => score + 30);
            columnOfThree.forEach(square => currentColorArrangement[square] = Blank);
            return true;
          }
        }
      }, [currentColorArrangement, playSound_3]);
    
      const checkForRowOfThree = useCallback(() => {
        for (let i = 0; i < 48; i++) {
          const rowOfThree = [i, i + 1, i + 2];
          const decidedColor = currentColorArrangement[i];
          const notValid = [5, 6, 7, 11, 12, 13, 19, 20, 26, 27, 33, 34, 35, 39, 40, 41, 47, 48];
          const isBlank = currentColorArrangement[i] === Blank;
          const row_2 = [14, 15, 16, 17, 18];

          if (notValid.includes(i)) continue;
    
          if (rowOfThree.every(square => currentColorArrangement[square] === decidedColor && !isBlank)) {
            playSound_3();
            setScoreDisplay((score) => score + 30);
            rowOfThree.forEach(square => currentColorArrangement[square] = Blank);
            return true;
          }
        }
      }, [currentColorArrangement, playSound_3]);

    const moveIntoSquareBelow = useCallback(() => {
        for (let i = 0; i <= 48; i++) {
            const firstRow = [0, 1, 2, 3, 4, 5, 6];
            const isFirstRow = firstRow.includes(i);
            const fixedFields = [7, 13, 35, 41];
            const isFixedField = fixedFields.includes(i);

            if ((isFirstRow && currentColorArrangement[i] === Blank) || (currentColorArrangement[i] === Blank)) {
                let randomNumber = Math.floor(Math.random() * colors.length)
                currentColorArrangement[i] = colors[randomNumber]
            }

            if ((currentColorArrangement[i + width]) === Blank && !isFixedField) {
                currentColorArrangement[i + width] = currentColorArrangement[i]
                currentColorArrangement[i] = Blank
            }
        }
    }, [currentColorArrangement]);

    const dragStart = (e) => {
      setItemBeingDragged(e.target)
    }
    
    const dragDrop = (e) => {
      setItemBeingReplaced(e.target)
    }
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

        const validMove = validMoves.includes(itemBeingReplacedId)

        const isAColumnOfFive = checkForColumnOfFive();
        const isARowOfFive = checkForRowOfFive()
        const isAColumnOfFour = checkForColumnOfFour()
        const isARowOfFour = checkForRowOfFour()
        const isAColumnOfThree = checkForColumnOfThree()
        const isARowOfThree = checkForRowOfThree()

        if (validMove && (itemBeingDragged.getAttribute('src') === Choco || itemBeingReplaced.getAttribute('src') === Choco)) {
          const chocoBombColors = [];
          for (let i = 0; i <= 48; i++) {
            if (currentColorArrangement[i] === itemBeingReplaced.getAttribute('src')) {
              chocoBombColors.push(i)
            }
          }
          super_color_bomb();
          setScoreDisplay((score) => score + chocoBombColors.length * 10);
          chocoBombColors.forEach(square => currentColorArrangement[square] = Blank);
        }

        if (validMove &&
          (isAColumnOfThree || isARowOfThree || isAColumnOfFour || isARowOfFour || isAColumnOfFive || isARowOfFive)) {
            if ((isAColumnOfFive || isARowOfFive) && 
            (itemBeingDragged.getAttribute('src') === colors[4] || itemBeingReplaced.getAttribute('src') === colors[4])) {
              currentColorArrangement[itemBeingReplacedId] = Choco;
            }

            if (isARowOfFour && 
              (itemBeingDragged.getAttribute('src') === colors[0] || itemBeingReplaced.getAttribute('src') === colors[0])) {
              currentColorArrangement[itemBeingReplacedId] = stripedHorizontal[0];
            }
            
          if (allMoves >= 1 && scoreDisplay < 500) {
            setallMoves((moves) => moves - 1);
          } else if (scoreDisplay >= 500) {
            setEarnedCoins((coins) => coins + Math.floor(scoreDisplay / 100) * 10);
            level_completed();
            setallMoves(0);
            document.getElementById('gameBoard-level-1').style.display = "none";
            document.getElementById('scoreBoard').style.display = "none";
            document.getElementById('levelWin').style.display = "flex";
          } else {
            level_failed();
            document.getElementById('gameBoard-level-1').style.display = "none";
            document.getElementById('scoreBoard').style.display = "none";
            document.getElementById('levelLose').style.display = "flex";
          }
    
          setItemBeingDragged(null);
          setItemBeingReplaced(null);
        } else {
          currentColorArrangement[itemBeingReplacedId] = itemBeingReplaced.getAttribute('src');
          currentColorArrangement[itemBeingDraggedId] = itemBeingDragged.getAttribute('src');
          setCurrentColorArrangement([...currentColorArrangement]);
        }
    }

    useEffect(() => {
        const timer = setInterval(() => {
            checkForColumnOfFive()
            checkForRowOfFive()
            checkForColumnOfFour()
            checkForRowOfFour()
            checkForColumnOfThree()
            checkForRowOfThree()
            moveIntoSquareBelow()
            setCurrentColorArrangement([...currentColorArrangement])
        }, 100)
        return () => clearInterval(timer)
    }, [checkForColumnOfFive, checkForRowOfFive, checkForColumnOfFour, checkForRowOfFour, 
      checkForColumnOfThree, checkForRowOfThree, moveIntoSquareBelow, currentColorArrangement])

    return (
      <div className="app">
      <div className="scoreBoard" id="scoreBoard">
        <ScoreBoard
          score={scoreDisplay}
          moves={allMoves}
        />
      </div>

      <div id="gameBoard-level-1">
        {currentColorArrangement.map((color, index) => (
          <img
            key={index}
            src={color}
            alt={color}
            data-id={index}
            style={{
              visibility: color === '' ? 'hidden' : 'visible',
              background: color === '' ? 'transparent' : '#465a7abf'
            }}
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
      <div className="levelWin" id="levelWin">
        <LevelWin score={scoreDisplay} coins={earnedCoins} />
      </div>
      <div className="levelLose" id="levelLose">
        <LevelLose />
      </div>

    </div>
    )
}

export default App