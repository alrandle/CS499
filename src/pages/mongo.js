import React, { useState } from 'react';
import axios from 'axios';

class Mongo extends React.Component{
  
  state = {
    username: '',
    passwrd: ''
  };

  //gets the current target getting updated
  handleEventUpdate = (event) => {
    const target = event.target;
    const name = target.name;
    const value = target.value;

    this.setState({
      [name]: value
    })

  };

  handleFormSubmission = (event) =>{
    event.preventDefault();

    const payload = {
      username: this.state.username,
      passwrd: this.state.passwrd
    };

    axios({
      url: '/api/save',
      method: 'POST',
      data: payload
    })
      .then(() => {
        console.log('[Console]: Data has been sent to the server!');
      })
      .catch(() => {
        console.log('[Console]: Internal Server Error!');
      })
  }

  render(){
    
    console.log("State: ", this.state);

    return (
    <div className='text-center text-white'>
      <h1>Daniel's Mongo Test Box</h1>
      <div className="container mt-3">
        <form onSubmit={this.handleFormSubmission} autoComplete="off">
          <div className="mb-3 mt-3">
            <label>Username:
              <input 
                type="text" 
                className="form-control"
                name='username'
                value={this.state.username}
                onChange={this.handleEventUpdate}
                required/>

            </label>
          </div>
          <div className="mb-3">
            <label>Password:
              <input 
              //Daniel
              //changed from text -> password
                type="password" 
                className="form-control"
                name="passwrd"
                value={this.state.passwrd}
                onChange={this.handleEventUpdate}
                required/>
            </label>
          </div>
          <button type="submit" className="btn btn-secondary">Submit</button>
          <a href='/register' className='btn btn-secondary' >Dont have an account?</a>
        </form>
      </div>
    </div>
    );
  }
}

export default Mongo;