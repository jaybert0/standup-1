import './App.css';
import {useEffect, useState} from "react"
import HouseList from './HouseList.js'
import HouseForm from "./HouseForm"
import HouseItem from "./HouseItem"
import { Route, Routes } from "react-router-dom";


function App() {
  const [houses, setHouses] = useState([])

  useEffect(() => {
    fetch("http://localhost:3000/houses").then((r)=>r.json()).then(setHouses)
  }, [])

  

  return (
  <div>
  <h1>Add a House</h1>
  <Routes>
    <Route exact path="/houses/:id" element={<HouseItem/>}/>
    <Route exact path="/" element={<><HouseForm/> <HouseList houses={houses}/></>}/>
  </Routes>
  </div>
  )
}

export default App;
