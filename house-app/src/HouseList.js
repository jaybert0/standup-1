import React, {useState, useEffect} from 'react';
import HouseItem from './HouseItem.js';
import {Link} from "react-router-dom";


function HouseList({houses}) {

    const [showHouse, setShowHouse] = useState({})

    // function handleClick(e) {
    //     const houseId = e.target.id
    //       fetch(`http://localhost:3000/houses/${houseId}`)
    //       .then((r) => r.json())
    //       .then(setShowHouse)

    // }

    const houseMap = houses.map((house) => {
      return (<>
      <li>{house.address}</li>
      <Link to={`/houses/${house.id}`}>Show Details</Link>
      </>)
    })

return ( 
  <>
    {houseMap}
  </>
  );
}

export default HouseList