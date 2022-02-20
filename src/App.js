
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink
} from "react-router-dom";

import React from 'react';
import About from "./components/About";
import Users from "./components/Users";
import Home from "./components/Home";
import Error404 from "./components/Error404";
import './App.css';

function App() {
  return (
  
    <Router>
      <div>
        <h2>Deploying Example</h2>
        <nav>
          <ul>
            <li>
              {/* navlink bir linke tıkladığımızda o sayfadayken linkin özelleştirilmesini sağlar.. */}
              {/* aynı zamanda activeClassName activeStyle etiketini kullanarak direkt olarak style da verebiliriz */}
              <NavLink activeClassName="active" exact to="/">Home</NavLink>
            </li>
            <li>
              <NavLink activeClassName="active" to="/about">About</NavLink>
            </li>
            <li>
              <NavLink activeClassName="active" to="/users">Users</NavLink>
            </li>
            <li>
              <a href="/#">Learn React</a>
            </li>
            
          </ul>
        </nav>
      </div>

    <Switch>
      <Route exact path="/" component={Home}/>
      <Route path="/about" component={About}/>      
      <Route path="/users" component={Users}/>
      <Route path="*" component={Error404}/>


    </Switch>
    </Router>

  );
}





export default App;
