import "./GameCard.css";

const GameCard = (props) => {
      return (
            <div className="game-card">
                  <h2>{String(props.game.gname)}</h2>
                  <p>ID: {String(props.game.id)}</p>
                  <p>Rating: {String(props.game.rating)}</p>
                  <p>
                        Made on: {String(props.game.madeYr.getFullYear())}
                  </p>
            </div>
      );
};

export default GameCard;