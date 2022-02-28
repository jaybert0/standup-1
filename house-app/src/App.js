import './App.css';
import {useEffect, useState} from "react"
import HouseList from './HouseList.js'

function App() {
  const [houses, setHouses] = useState([])

  useEffect(() => {
    fetch("http://localhost:3000/houses").then((r)=>r.json()).then(setHouses)
  }, [])

  

  return (
  <>
  <h1>Add a House</h1>
  <HouseForm/>
  <HouseList houses={houses} />
  </>
  )
}

export default App;
