import BrokenHeart from "../images/broken-heart.png";

const LevelLoseBoard = () => {
    return (
        <div className="levelEndCover">
            <h1 id="level">Level 1</h1>
            <h2>You lose!</h2>
            <div className="lose">
                <h2 className="loseLife">-1</h2>
                <img src={BrokenHeart} id="brokenHeart" alt="broken heart" />
            </div>
            <div className="buttonGroup">
                <button type="button" className="again btn btn-info">Retry</button>
            </div>
        </div>
    );
}

export default LevelLoseBoard;