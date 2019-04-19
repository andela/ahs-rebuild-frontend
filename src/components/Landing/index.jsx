import React, { Component, Fragment } from 'react';
import Navbar from '../Navbar/index.jsx';
import SideBar from '../SideBar/index.jsx';
import './Landing.scss';


class Landing extends Component {
    render(){
        return(
            <Fragment>
                <Navbar />
                <div className="layout-history">Jump to:</div>
                <div className="layout-body">
                    <div className="layout-sidebar">
                        <SideBar />
                    </div>
                    <div className="layout-body-content">
                        <h1>This is the landing</h1>
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default Landing;