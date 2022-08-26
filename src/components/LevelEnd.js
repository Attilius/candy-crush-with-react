import Coin from "../images/coin.png";
import Cup from "../images/cup.png";

const LevelEnd = ({ score, coins }) => {
    return (
        <div className="levelEndCover">
            <h1 id="level">Level 1</h1>
            <div className="stars">

            </div>
            <h2>You Win!</h2>
            <div className="levelEndScore">
                <img src={Cup} id="cup" alt="cup" />
                <h1>{score}</h1>
            </div>
            <div className="levelEndScore">
                <img src={Coin} id="coin" alt="coin" />
                <h1>{coins}</h1>
            </div>
            <div className="buttonGroup">
                <button type="button" className="again btn btn-info">Retry</button>
                <button type="button" className="next btn btn-success">Continue</button>
            </div>
        </div>
    );
}

export default LevelEnd;