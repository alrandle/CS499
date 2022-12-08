/* analytics.js
 * This page is responsible for displaying all of the quiz responses
 * This page should show respondents score, as well as a few other things. 
 * 
 * Daniel
 */

import React, { useEffect, useState } from 'react';
import axios from 'axios';


let loaded = false
async function selectQuiz(){
  //have options for the quizes?
  if(loaded == false){
    const tempQuizes = [
      "Quiz 1",
      "Quiz 2",
    ]
    let messageLocation = document.getElementById("current-quiz")
    let currentMessage = messageLocation.innerHTML
    for(let i = 0; i < tempQuizes.length; i++){
      let message = `<button id=${tempQuizes} type="button" onClick={}>${tempQuizes[i]}</button>`
      currentMessage = currentMessage + message
      messageLocation.innerHTML = currentMessage

    }
    loaded = true
  }
}

async function loadGrades(){
  console.log("made it")
  
}

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
        <h1>Quiz analytics</h1>
        <br></br>
        <div className='text-center text-white'>
          <h3>Please Select A Quiz From Below To Grade</h3>
          <button onClick={loadGrades}>Click To Load Grades</button>
        </div>
        <br></br>
        <div className='text-center text-white'>
          <h3>Here are your individual student grades</h3>
          <div id='student-grades'></div>
        </div>
      </div>
    )
  }
    
}

export default Analytics;