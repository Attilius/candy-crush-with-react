const ScoreBoard = ({ score, bonus_4, bonus_5, moves }) => {
    return (
        <div className="score-board">
            <div className="moves">
                <h1>Moves</h1>
                <h1>{moves}</h1>
            </div>
            <div className="score">
                <h1>{score}</h1>
            </div>
            <div className="taskSheet">
                <h1>Points:</h1>
                <h1>{score}</h1>
                <h1>/500</h1>
            </div>
        </div>
    );
}

export default ScoreBoard;