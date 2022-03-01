import React, {useState} from 'react';


function HouseForm(){

    const [formData, setFormData] = useState({
        address: "",
        owner_name: "",
        color: "",
        occupants: "",
        home_available: false
    })

    function handleSubmit(e){
        e.preventDefault();
        
        fetch("http://localhost:3000/houses", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(formData)
        }).then(res => res.json()).then(console.log)
    }


    function handleChange(e) {
        const name = e.target.name
        let value = e.target.value

        if(e.target.type === 'checkbox')
        {
            value = e.target.checked
        }
        setFormData({
        ...formData,
        [name]: value
    })
}

    
    return (
        <form onSubmit={e => handleSubmit(e)}>
            <input id="1" name="address" type="text" placeholder="Address" onChange={handleChange}/>
            <input id="2" name="owner_name" type="text" placeholder="Owner Name"onChange={handleChange}/>
            <input id="3" name="color" type="text" placeholder="Color"onChange={handleChange}/>
            <input id="4" name="occupants" type="text" placeholder="Occupants"onChange={handleChange}/>
            <input id="5" name="home_available" type="checkbox" onChange={handleChange}/>
            <label htmlFor="5">Is house available?</label>
            <button>Submit</button>
        </form>
    )
}

export default HouseForm