

import React, { Component } from 'react';
import { Link, BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import { Button } from 'antd';

const t = () => {
    return (
        <h1>TARGET COMPONENT</h1>
    )
}

const b = () =>{
    return(
        <Button onClick={this.callMe.bind(this)} > Click me! </Button>
    )
}

class LearnRedirect extends Component {
    state = {
        x: false
    };

    callMe() {
        this.setState({ x: true })
    }

    renderRedirect() {
        if (this.state.x)
            return <Redirect to='/target' />
        // return <div><h1>CLICKED!!!</h1></div>
    }


    render() {

        return (
            <Router>
                <div>
                {this.renderRedirect()}
                    <Switch>
                        
                        <Route exact path='/target' component={t} />
                        {/* <Route exact path='/' component={b} /> */}
                        
                    </Switch>
                    {/* <Link to = '/target'>{b}</Link> */}
                    <Button onClick={this.callMe.bind(this)} > Click me! </Button>
                </div>
            </Router>
        )
    }
}

export default LearnRedirect;