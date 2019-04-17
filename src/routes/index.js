import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Landing from '../components/Landing';


export default class Routes extends Component {
    render () {
        return (
            <Fragment>
                <Router>
                    <Switch>
                        <Route exact path="/" render={props => <Landing {...props}/>} />
                    </Switch>
                </Router>
            </Fragment>
        )
    }

}