import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';

const HeroC = () =>{
  return(
    <div>
      < UserC  />
        < MainC  />
      </div>
  )
}

const UserC = () => {
  return(
    <div>
      <h1>Welcome User</h1>
    <button><Link to = '/home'>Home</Link></button>
    <button><Link to = '/away'>Away</Link></button>
    <button><Link to = '/verydoor'>Very door</Link></button>
    {MainC}
      </div>
  )
}

const MainC = () => {
  return(
    <Switch>
          <Route exact path = '/home' component = { HomeC } />
          <Route exact path = '/away' component = { AwayC } />
          <Route exact path = '/verydoor' component = { DoorC } />
    </Switch>
  )
}

const HomeC = () =>{
  return(
    <h1>Home</h1>
  )
}
const AwayC = () =>{
  return(
    <h1>Away</h1>
  )
}
const DoorC = () =>{
  return(
    <h1>Very Door</h1>
  )
}




class App extends Component {
  render() {
    return (
      <Router>
            <HeroC />
        </Router>
    );
  }
}

export default App;


{/* <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div> */}