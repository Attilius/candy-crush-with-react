const LevelBoard = () => {
    return (
        <div className="levelEndCover">
            <h1 id="level">Level 1</h1>
            <h2>Task:</h2>
            <div className="task-field">
            </div>
            <div className="buttonGroup">
                <button type="button" className="next btn btn-success">Continue</button>
            </div>
        </div>
    );
}

export default LevelBoard;