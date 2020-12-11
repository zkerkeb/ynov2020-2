import React, { useEffect, useState } from 'react'
import CharactersList from './components/charactersList'
import ListRowHarryPotter from './components/listRowHarryPotter'
import ListRowStarWars from './components/listRowStarWars'
import axios from 'axios'

import './App.css'

function App() {
  const [charactersHarryPotter, setCharactersHarryPotter] = useState([])
  const [charactersStarWars, setCharactersStarWars] = useState([])

  const getHarryPotter = () => {
    axios({
      method: 'GET',
      url: ' http://hp-api.herokuapp.com/api/characters'
    })
      .then(res => {
        setCharactersHarryPotter(res.data)
      })
      .catch(err => err)
  }

  const getStarWars = () => {
    axios({
      method: 'GET',
      url: 'https://swapi.dev/api/people/'
    })
      .then(res => {
        setCharactersStarWars(res.data.results)
      })
      .catch(err => err)
  }

  useEffect(() => {
    getHarryPotter()
    getStarWars()
  }, [])

  return (
    <div>
      <CharactersList
        component={ListRowHarryPotter}
        list={charactersHarryPotter}
      ></CharactersList>
      <CharactersList
        component={ListRowStarWars}
        list={charactersStarWars}
      ></CharactersList>
    </div>
  )
}

export default App
