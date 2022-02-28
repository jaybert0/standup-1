import React from "react";

function HouseItem({house}) {

    return (
        <ul>
            <li>{house.owner_name}</li>
            <li>{house.occupants}</li>
            <li>{house.home_available}</li>
            <li>{house.color}</li>
        </ul>
    )
}

export default HouseItem