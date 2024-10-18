import { useState } from "react"

export default function Player(){

    const [team, setPlayer] = useState(11);

    const handleAdd = () =>{
        const newPlayer = team + 1;
        setPlayer(newPlayer)
    }

    const handleRemove = () =>{
        const newPlayer = team - 1;
        setPlayer(newPlayer)
    }

    return (
        <div style={{border: '2px solid green', marginBottom: '10px'}}>
            <h3>Players: {team}</h3>
            <button onClick={handleAdd}>Add Player</button>
            <button onClick={handleRemove}>Remove Player</button>
        </div>
    )
}