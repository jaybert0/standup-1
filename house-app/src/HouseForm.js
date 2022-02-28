import React, {useState, useEffect} from 'react';


function HouseForm(){

    const [newHouse, setNewHouse] = useState({
        address: "",
        ownerName: "",
        color: "",
        occupants: "",
        isAvailable: false
    })
    
    
    return (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Address"></input>
            <input type="text" placeholder="Owner Name"></input>
            <input type="text" placeholder="Color"></input>
            <input type="text" placeholder="Occupants"></input>
            <input type="checkbox">Is House Available?</input>
            <button>Submit</button>
        </form>
    )
}

export default HouseForm