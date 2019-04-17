import React, { Component, Fragment } from 'react';
import Navbar from '../Navbar/index.jsx';


class Landing extends Component {
    render(){
        return(
            <Fragment>
            <Navbar />
            <h1>This is the landing</h1>
            </Fragment>
        )
    }
}

export default Landing;