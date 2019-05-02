import React, { Component } from 'react';

class Button extends Component{
  render(){
      const { buttonName, handleChange, buttonClassName, track } = this.props;
    return(
      <div
        type="button"
        id= { buttonName } 
        onClick={handleChange}
        className={ buttonClassName }
      >
        { track }
      </div>
    )
  }

}

export default Button;
