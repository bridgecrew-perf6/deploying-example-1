import {
    Switch,
    Route,
    NavLink,
    useRouteMatch
  } from "react-router-dom";

import {useEffect,useState} from "react";
import axios from 'axios';
import User from "./User";

function Users() {
    const [users, setUsers] = useState([]);
    const [loading,setLoading] = useState(true);

    const {path,url} = useRouteMatch();

    console.log(path,url);

    useEffect(()=>{
        axios('https://jsonplaceholder.typicode.com/users')
        .then(res=>setUsers(res.data))
        .finally(()=>setLoading(false))

    }, [])
  return (
    <div>
        <h1>Users</h1>
        {loading && <div>Loading...</div>}
      <ul>
          {
              users.map((user)=>
                <li key={user.id}>
                  <NavLink activeClassName="active" to={`${url}/${user.id}`}>{user.name}</NavLink>
                </li>)
          }
        
      </ul>

      <Switch>
        <Route exact path={path}>
          <h3>Please select a user.</h3>
        </Route>
        <Route path={`${path}/:id`} component={User}/>
      </Switch>

    </div>
  )
}

export default Users;
