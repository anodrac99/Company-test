import axios from "axios"
import { useEffect } from "react";
import { useState } from "react";
import './App.css';
import UserCard from "./components/UserCard";

function App() {
  const [users, setUser] = useState([])

  useEffect(()=>{
    axios.get("http://localhost:4000/users")
    .then(res=> setUser(res.data.data))
    .catch(err => console.log(err))
  },[])


  return (
    <div>
      <h1>Bienvenido!</h1>
      <div className="users-container">
        {
          users.map((user) =>
            <UserCard user={user} key={user.id} />
          )
          
        }
      </div>
    </div>
  );
}

export default App;
