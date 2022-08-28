import { colors } from "../BasicVariables";
import { useEffect } from "react";

const Level_1 = (setCurrentColorArrangement) => {
    const createBoard = () => {
        const starterColorArrangement = [
        colors[4], colors[3], colors[5], colors[0], colors[5], colors[5], colors[4],
        '', colors[3], colors[5], colors[1], colors[0], colors[0], '',
        colors[1], colors[1], colors[0], colors[4], colors[5], colors[3], colors[5],
        colors[1], colors[5], colors[4], colors[0], colors[4], colors[0], colors[3],
        colors[5], colors[5], colors[3], colors[1], colors[3], colors[5], colors[1],
        '', colors[1], colors[1], colors[5], colors[5], colors[1], '',
        colors[4], colors[0], colors[3], colors[1], colors[3], colors[5], colors[4],
    ];
    setCurrentColorArrangement(starterColorArrangement);
    }

    useEffect(() => {
        createBoard();
    }, [setCurrentColorArrangement]);

}
export default Level_1;