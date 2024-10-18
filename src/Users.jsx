// import { useEffect, useState } from "react"
// import User from "./User";
// import './User.css'

// export default function Users(){

//     const [user, setUser] = useState([]);

//     useEffect(()=>{
//         fetch("https://jsonplaceholder.typicode.com/users")
//         .then(res => res.json())
//         .then(data => setUser(data))
//     }, [])

//     return (
//         <div className="box"> 
//             <h3>User: {user.length} </h3>

//         {
//             user.map(user => <User user={user}></User>)
//         }

//         </div>
//     )
// }