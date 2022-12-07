// eslint-disable-next-line
import React, { useState } from 'react';
import axios from 'axios';
import "./css/error.css"

class Login extends React.Component{

  state = {
    email: '',
    passwrd: '',
    redirect: false
  };

  //[errorMessages, setErrorMessages] = useState({});
  //[isSubmitted, setIsSubmitted] = useState(false);
  errors = {
    eml: "Invalid email",
    pass: "Invalid password"
  };

  //gets the current target getting updated
  //this is redundant, but I do not have the time to clean this up atm.
  handleEventUpdate = (event) => {
    const target = event.target;
    const name = target.name;
    const value = target.value;

    this.setState({
      [name]: value
    })
  };
  errorHandling =() => {
    let message = ["<br></br><h3 style={color:red}> There was an interal error. Please try again later </h3><br></br>"]
    let placeLocation = document.getElementById("error-section")
    placeLocation.innerHTML = message;
  }


  handleLoginForum = async (event) =>{
    event.preventDefault();

    const payload = {
      email: this.state.email,
      password: this.state.passwrd
    };

    axios({
      url: 'http://localhost:8080/api/login',
      method: 'POST',
      data: payload
    })
      //User redirect needs to go in this statement.
      .then((res) => {
        console.log('[Console]: You are now logged in as', res.data.username);
        localStorage.setItem('_id', res.data._id);
        localStorage.setItem('username', res.data.username);
        localStorage.setItem('email', res.data.email);
        localStorage.setItem('firstname', res.data.name.firstname);
        localStorage.setItem('lastname', res.data.name.lastname);
        localStorage.setItem('hash', res.data.password.hash);
        localStorage.setItem('salt', res.data.password.salt);
        localStorage.setItem('role', res.data.role);
        window.open('/', "_self");
      })
      //Error handling should be sent to a notification box on the DOM
      .catch(() => {
        this.errorHandling();
        console.log('[Console]: Internal Server Error!');
      })
  }

  render(){
    return(
      <div className='text-center text-white'>
        <h1>Login</h1>
        <div className='text-center text-red' id='error-section'>
        </div>
        <div className="container mt-3">
          <form onSubmit={this.handleLoginForum} autoComplete="off">
            <div className="mb-3 mt-3">
            <label>Email:
              <input 
                type="email"
                placeholder='placeholder@example.com'
                className="form-control"
                name='email'
                value={this.state.email}
                onChange={this.handleEventUpdate}
                required
              />
            </label>
            </div>
            <div className="mb-3">
              <label>Password:
                <input 
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
  /*
  return (
    <div className='text-center text-white'>
      <div className='form'>
        
        {isSubmitted ? <div>User is successfully logged in</div> : pageForm}
      </div>
    </div>
  );*/
}


export default Login;

/**
 *  const handleSubmit = (event) =>{ // use this to handle the submission from the form
    event.preventDefault() //don't touch this
    var { uname, pass } = document.forms[0];
    console.log(uname, pass) // need to delete this in the final review
    //find user --> this will change with database connection
    const userData = database.find((user) => user.username === uname.value);

    if (userData) { //shouldn't need to change this
      if (userData.password !== pass.value){
        setErrorMessages({name: "pass", message: "Not a valid Password"})
      }else {
        setIsSubmitted(true);
        if(setIsSubmitted){ // set roll page
          if(userData.roll === "admin"){
            setTimeout(() => {
              window.open('teacher', "_self")
            }, 3000);
          } else if(userData.roll === "user"){
            setTimeout(() => {
              window.open('student', "_self")
            }, 3000);
          } else {
            setTimeout(() => {
              window.open('/', "_self")
            }, 3000);
          }
        }
      }
    } else{
      setErrorMessages({name: "uname", message: "Not a valid Username"})
    }
  }
const renderErrorMessage = (name) =>
  name === errorMessages.name && (
    <div className='error'>{errorMessages.message}</div>
  );
 */