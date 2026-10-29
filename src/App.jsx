import './App.css'
import GameCard from './Comp_GameCard/GameCard'
import GameList from './Comp_GameList/GameList'
import Container from './Comp_Container/Container'
import GameForm from './Comp_GameForm/GameForm'
import Filter from './Comp_Filter/Filter'
import { useState } from 'react'
const initialGames = [{
  id: 1,
  gname: "Manuganu",
  rating: 10,
  madeYr: new Date(2020, 0, 27),
  is_rec: true,
}, {
  id: 2,
  gname: "Brawl Stars",
  rating: 5,
  madeYr: new Date(2019, 6, 15),
  is_rec: true,
}, {
  id: 3,
  gname: "Minecraft",
  rating: 9,
  madeYr: new Date(2026, 9, 27),
  is_rec: true,
}
]
function App() {
  const [filterDate, setFilterDate] = useState("all")
  const [games, setGames] = useState(initialGames);
  function getForm(data) {
    const newGame = { id: games.length + 1, ...data, madeYr: new Date(data.madeYr) }
    setGames((prevState) => {
      return [newGame, ...prevState]
    })
    console.log(games);

  }
  function getFilterDate(data) {
    setFilterDate(data)
  }
  function changeTitle(id, title) {
    setGames((prevgame) => {
      return prevgame.map((game) => {
        return game.id === id ? { ...game, gname: title } : game
      })
    })
  }
  let content = <h2>No Data Found</h2>;
  const filteredGames = games.filter((gameEle) =>
    filterDate === "all" ? true : gameEle.madeYr.getFullYear().toString() === filterDate
  )
  if (filteredGames.length !== 0) {
    content = filteredGames.map((gameEle) => <GameCard game={gameEle} key={gameEle.id} sendTitle={changeTitle} />)
  }

return (
  <Container>
    <GameForm sendForm={getForm} />
    <Filter sendFilterDate={getFilterDate} filterDate={filterDate} />
    <GameList>
      {content}
    </GameList>
  </Container>
)
}
export default App;