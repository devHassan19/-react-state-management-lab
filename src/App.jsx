import './App.css'
import { useState } from 'react'
// import zombieFighters from './zombieFighters'

const App = () => {
  const [team, setTeam] = useState([])
  const [money, setMoney] = useState(100)
  const [zombieFighters, setZombieFighters] = useState([
    {
      name: 'Survivor',
      price: 12,
      strength: 6,
      agility: 4,
      img: 'https://via.placeholder.com/150/92c952'
    },
    {
      name: 'Scavenger',
      price: 10,
      strength: 5,
      agility: 5,
      img: 'https://via.placeholder.com/150/771796'
    },
    {
      name: 'Shadow',
      price: 18,
      strength: 7,
      agility: 8,
      img: 'https://via.placeholder.com/150/24f355'
    },
    {
      name: 'Tracker',
      price: 14,
      strength: 7,
      agility: 6,
      img: 'https://via.placeholder.com/150/d32776'
    },
    {
      name: 'Sharpshooter',
      price: 20,
      strength: 6,
      agility: 8,
      img: 'https://via.placeholder.com/150/1ee8a4'
    },
    {
      name: 'Medic',
      price: 15,
      strength: 5,
      agility: 7,
      img: 'https://via.placeholder.com/150/66b7d2'
    },
    {
      name: 'Engineer',
      price: 16,
      strength: 6,
      agility: 5,
      img: 'https://via.placeholder.com/150/56acb2'
    },
    {
      name: 'Brawler',
      price: 11,
      strength: 8,
      agility: 3,
      img: 'https://via.placeholder.com/150/8985dc'
    },
    {
      name: 'Infiltrator',
      price: 17,
      strength: 5,
      agility: 9,
      img: 'https://via.placeholder.com/150/392537'
    },
    {
      name: 'Leader',
      price: 22,
      strength: 7,
      agility: 6,
      img: 'https://via.placeholder.com/150/602b9e'
    }
  ])

  const [strength, setStrength] = useState(0)
  const [agility, setAgility] = useState(0)

  const handleAddFighter = (event) => {
    const newTeam = { ...team, zombie }
    setTeam(newTeam)
  }

  const handleRemoveFighter = (event) => {}
  return (
    <>
      <h1>Zombie Fighters</h1>
      <h2>Money: {money}</h2>
      <h2>Team Strength: {strength}</h2>
      <h2>Team Agility: {agility}</h2>
      <div>
        <h1>Teams</h1>
        <ul>
          {team.map((zombie, index) => (
            <li id={index}>
              <img src={zombie.img} alt="" />
              <h3>{zombie.name}</h3>
              <p>Price: {zombie.price}</p>
              <p>Strength: {zombie.strength}</p>
              <p>Agility: {zombie.agility} </p>
              <button id={index} onClick={handleRemoveFighter}>
                Remove
              </button>
            </li>
          ))}
        </ul>
      </div>
      <h1>Fighters</h1>
      <ul>
        {zombieFighters.map((zombie, index) => (
          <li id={index}>
            <img src={zombie.img} alt="" />
            <h3>{zombie.name}</h3>
            <p>Price: {zombie.price}</p>
            <p>Strength: {zombie.strength}</p>
            <p>Agility: {zombie.agility} </p>
            <button id={index} onClick={handleAddFighter}>
              Add
            </button>
          </li>
        ))}
      </ul>
    </>
  )
}

export default App
