import "./GameList.css"
function GameList(props){
      return(
            <div className="game-container" >{props.children}</div>
      )
}
export default GameList