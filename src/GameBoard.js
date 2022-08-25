import { useEffect } from "react";
import { width, colors } from "./BasicVariables";

const GameBoard = (setCurrentColorArrangement) => {
    const createBoard = () => {
        const randomColorArrangement = [];
        for (let i = 0; i < width * width; i++) {
            const randomNumberToRandomColor = Math.floor(Math.random() * colors.length);
            const randomColor = colors[randomNumberToRandomColor];
            randomColorArrangement.push(randomColor);
        }
        setCurrentColorArrangement(randomColorArrangement);
    }

    useEffect(() => {
        createBoard();
    }, []);
    
}

export default GameBoard;