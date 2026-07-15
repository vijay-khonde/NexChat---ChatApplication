import { useEffect, useState } from "react";
import axios from "axios";

const Dashboard = () => {
  const [profile, setProfile] = useState({});
  const [users, setUsers] = useState([]);
  useEffect(() => {

    const token = localStorage.getItem("token");
    axios.get("http://localhost:3000/api/users/profile", {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }).then(res => setProfile(res.data));

    axios.get("http://localhost:3000/api/users", {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }).then(res => setUsers(res.data));

  }, []);

  return (

    <div>

      <h2>Welcome {profile.name}</h2>
      <h3>Users</h3>

      {
        users.map(user => (

          <div key={user._id}>
            {user.name}
          </div>

        ))
      }
    </div>

  )
}

export default Dashboard
