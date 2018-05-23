

import React, { Component } from 'react';
import { Link, BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import { Button } from 'antd';

const t = () => {
    return (
        <h1>TARGET COMPONENT</h1>
    )
}

const t1 = () => {
    return (
        <h1>TARGET COMPONENT 1</h1>
    )
}

const t2 = () => {
    return (
        <h1>TARGET COMPONENT 2</h1>
    )
}

const t3 = () => {
    return (
        <h1>TARGET COMPONENT 3</h1>
    )
}

const t4 = () => {
    return (
        <h1>TARGET COMPONENT 4</h1>
    )
}

const t5 = () => {
    return (
        <h1>TARGET COMPONENT 5</h1>
    )
}

const b = () =>{
    return(
        <Button onClick={this.callMe.bind(this)} > Click me! </Button>
    )
}

class LearnRedirect extends Component {
    state = {
        x: ''
    };

    callMe() {
        this.setState({ x: 'hehe' })
    }

    callMe1() {
        this.setState({ x: '1' })
    }

    callMe2() {
        this.setState({ x: '2' })
    }

    callMe3() {
        this.setState({ x: '3' })
    }

    callMe4() {
        this.setState({ x: '4' })
    }

    callMe5() {
        this.setState({ x: '5' })
    }

    renderRedirect() {
       switch (this.state.x){

        case '1':
       return (
        <Redirect to='/target1' />
    )
       break;

       case '2':
       return (
        <Redirect to='/target2' />
       )
       break;

       case '3':
       return(
        <Redirect to='/target3' />
       )
       break;

       case '4':
       return(
        <Redirect to='/target4' />
       )
       break;

       case '5':
       return(
        <Redirect to='/target5' />
       )
       break;

       case 'hehe' : 
       return (
        <Redirect to='/target' />
       )
       break;
       }
       
       

        // return <div><h1>CLICKED!!!</h1></div>
    }


    render() {

        return (
            
            <Router>
                <div>
                {this.renderRedirect()}
                <div>
                
                    <Switch>
                        
                        <Route exact path='/target' component={t} />
                        <Route exact path='/target1' component={t1} />
                        <Route exact path='/target2' component={t2} />
                        <Route exact path='/target3' component={t3} />
                        <Route exact path='/target4' component={t4} />
                        <Route exact path='/target5' component={t5} />
                        {/* <Route exact path='/' component={b} /> */}
                        
                    </Switch>
                    {/* <Link to = '/target'>{b}</Link> */}
                    <Button onClick={this.callMe.bind(this)} > Click me - default! </Button>
                    <Button onClick={this.callMe1.bind(this)} > Click me 1! </Button>
                    <Button onClick={this.callMe2.bind(this)} > Click me 2! </Button>
                    <Button onClick={this.callMe3.bind(this)} > Click me 3! </Button>
                    <Button onClick={this.callMe4.bind(this)} > Click me 4! </Button>
                    <Button onClick={this.callMe5.bind(this)} > Click me 5! </Button>
                    
                </div>
                </div>
            </Router>
        )
    }
}

export default LearnRedirect;