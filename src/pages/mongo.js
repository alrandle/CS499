import React, { useState } from 'react';
import axios from 'axios';

class Mongo extends React.Component{
  
  state = {
    username: '',
    passwrd: '',
    posts: []
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
  //This is the function that is called when you submit
  //This creates a payload out of the state then passes it through POST with axios.
  handleLoginRequest = (event) =>{
    event.preventDefault();

    const payload = {
      username: this.state.username,
      passwrd: this.state.passwrd
    };

    axios({
      url: 'http://localhost:8080/api/login',
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
    //This outputs the current payloud in the console
    //console.log("State: ", this.state);

    return (
    <div className='text-center text-white'>
      <h1>Daniel's Mongo Test Box</h1>
      <div className="container mt-3">
        <form onSubmit={this.handleLoginRequest} autoComplete="off">
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