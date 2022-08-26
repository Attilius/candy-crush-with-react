const ScoreBoard = ({ score, moves }) => {
    return (
        <div className="score-board">
            <div className="moves">
                <h1 className="movesTitle">Moves</h1>
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