/* analytics.js
 * This page is responsible for displaying all of the quiz responses
 * This page should show respondents score, as well as a few other things. 
 * 
 * Daniel
 */

import React, { useState } from 'react';
import axios from 'axios';


class Analytics extends React.Component{
    state = {
        posts:[]
    }

  //Calls whenever the React Component mounts.
  componentDidMount = () => {
    
  }


  handleEventUpdate = (event) => {
    const target = event.target;
    const name = target.name;
    const value = target.value;

    this.setState({
      [name]: value
    })

  };

  render(){
    return(
      <div className='text-center text-white'>
      </div>
    )
  }
    
}

export default Analytics;