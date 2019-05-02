import React, { Component, Fragment } from 'react';
import Navbar from '../Navbar/index.jsx';
import Button from '../Buttons';
import './Landing.scss';


class Landing extends Component {
    
    handleChangeTrack = event => {
        event.preventDefault();
        
      };
    render(){
        return(
            <Fragment>
                <Navbar />
                <div className="layout-history">Jump to:</div>
                <div className="layout-body">
                    <div className="layout-body-content">
                        <h1> Overview </h1>
                    </div>
                    <div className="layout-body-tracks">
                        <div className='layout-body-tracks-desc'>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                            when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                            It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                            It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
                            and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                        </div>
                        <Button
                            buttonName="beginnerTrack"
                            handleChange={this.handleChangeTrack}
                            buttonClassName='beginner-track'
                            track='Beginner Track'
                        />
                        <Button
                            buttonName="advancedTrack"
                            handleChange={this.handleChangeTrack}
                            buttonClassName='advanced-track'
                            track='Advanced Track'
                        />
                    </div>
                    <div className='layout-body-intro'>
                        <h2>Introduction View</h2>
                        <div className='layout-body-intro-content'> 
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                            when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default Landing;
