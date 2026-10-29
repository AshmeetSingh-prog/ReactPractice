import "./GameCard.css";
import { useState } from "react";

const GameCard = (props) => {
      const [inp,setInp] = useState("");
      function changeTitle() {
            inp !== "" ? props.sendTitle(props.game.id,inp) : null ;
      }
      return (
            <div className="game-card">
                  <h2>{String(props.game.gname)}</h2>
                  <p>ID: {String(props.game.id)}</p>
                  <p>Rating: {String(props.game.rating)}</p>
                  <p>
                        Made on: {String(props.game.madeYr.getFullYear())}
                  </p>
                  <input type="text" value={inp} placeholder="Enter new name" onChange={(e)=>{setInp(e.target.value)}} />
                  <button type="button" onClick={changeTitle}>Change Name</button>
            </div> 
      );
};
export default GameCard;