import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';


// CHECKING SOMETHING --- only the comment is worthwhile....
// file left unchanged.....



const HeroC = () => {
  return (
    <div>
      < UserC />
      <hr />
      < MainC />
    </div>
  )
}

const UserC = () => {
  return (
    <div>
      <h1>Welcome User</h1>
      <button><Link to='/home'>Home</Link></button>
      <button><Link to='/away'>Away</Link></button>
      <button><Link to='/verydoor'>Very door</Link></button>
    </div>
  )
}

const MainC = () => {
  return (
    <div>
      <Switch>
        <Route  path='/home' component={HomeC} />
        <Route  path='/away' component={AwayC} />
        <Route  path='/verydoor' component={DoorC} />
      </Switch>
      <hr />
      < Route path = "/" component = { ThirdC } />
    </div>
  )
}

const ThirdC = () => {
  return (
    <div>
      <Switch>
        <Route path='/home/h' render={() => {
            return(
              <h1>Home</h1>
            )
        }} />
        <Route path='/away/a' render={() => {
            return(
              <h1>Away</h1>
            )
        }} />
        <Route path='/verydoor/v' render={() => {
            return(
              <h1>Up and Away</h1>
            )
        }} />
      </Switch>
    </div>
  )
}

const HomeC = () => {
  return (
    <h1><Link to="/home/h">Home</Link></h1>
  )
}
const AwayC = () => {
  return (
    <h1><Link to="/away/a">Away</Link></h1>
  )
}
const DoorC = () => {
  return (
    <h1><Link to="/verydoor/v">Very Away</Link></h1>
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