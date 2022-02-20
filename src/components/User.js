import axios from 'axios';
import {useEffect,useState} from 'react';
import {useParams, Link} from 'react-router-dom';


function User() {
    const [loading,setLoading] = useState(true);
    const [user,setUser] = useState({});
    const {id} = useParams();

    useEffect(()=>{
        axios(`${process.env.REACT_APP_API_ENDPOINT}/users/${id}`)
        .then((res)=>setUser(res.data))
        .finally(()=>setLoading(false));
    },[id])
  return (
    <div>
      <h1>User Detail</h1>
      {loading && <div>Loading...</div>}
     {!loading &&  <code>
          {JSON.stringify(user)}
      </code>}

      <br></br><br></br>
    

    <Link  style={{backgroundColor: 'red',color:'white', marginRight:20}} to={`/users/${parseInt(id)-1}`}>Previous User ({parseInt(id)-1})</Link> 
    <Link  style={{backgroundColor: 'green', color:'white'}} to={`/users/${parseInt(id)+1}`}>Next User ({parseInt(id)+1})</Link>

    


    </div>

  )
}

export default User
