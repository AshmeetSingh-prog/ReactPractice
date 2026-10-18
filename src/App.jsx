import './App.css'
import GameCard from './Comp_GameCard/GameCard'
import GameList from './Comp_GameList/GameList'
import Container from './Comp_Container/Container'
import GameForm from './Comp_GameForm/GameForm'

function App() {
  const games = [{
    id: 1,
    gname: "Manuganu",
    rating: 10,
    madeYr: new Date(2000, 0, 27),
    is_rec: true,
  }, {
    id: 2,
    gname: "Brawl Stars",
    rating: 5,
    madeYr: new Date(2009, 6, 15),
    is_rec: true,
  }, {
    id: 3,
    gname: "Minecraft",
    rating: 9,
    madeYr: new Date(2016, 9, 27),
    is_rec: true,
  }
  ]
  function getForm(data) {
    const newGame = { id: games.length + 1, ...data }
    games.push(newGame)
    console.log(games);    
  }
  return (
    <Container>
      <GameForm sendForm={getForm} />
      <GameList>
        <GameCard game={games[0]} />
        <GameCard game={games[1]} />
        <GameCard game={games[2]} />
      </GameList>
    </Container>
  )
}
export default App