import React, {useEffect, useState} from 'react';
import HouseItem from './HouseItem.js';


function HouseList({houses}) {

    const [showHouse, setShowHouse] = useState([])

    function handleClick() {
        const houseId = e.target.id
        useEffect(()=> {
            fetch(`http://localhost:3000/houses/${houseId}`).then((r) => r.json()).then(setShowHouse)
        },[])
        
        return (<HouseItem house={showHouse}/>)
    }

return ( 
    <ul>
    {houses.map((house) => {
        <>
      <li>{house.address}</li>
      <button id={house.id} onClick={handleClick}>Show Details</button>
      
      </>
    })}
    </ul>
  );
}

export default HouseList