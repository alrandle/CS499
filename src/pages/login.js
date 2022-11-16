import React, { useState } from 'react';
import ReactDOM from "react-dom";

function Login(){
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const database = [ /*this is the code to change to the actual database*/
  // connect data base here?
    {
      username: "user1",
      password: "pass1", 
      roll: "admin"
    },
    {
      username: "user2",
      password: "pass2",
      roll: "user"
    }
  ];

  const errors = {
    uname: "Invalid username",
    pass: "Invalid password"
  };

  const handleSubmit = (event) =>{ // use this to handle the submission from the form
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
          } if(userData.roll === "user"){
            setTimeout(() => {
              window.open('user', "_self")
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



  const pageForm = (
    <div className='text-center text-white'>
      <h1>Login Test</h1>
      <div className="container mt-3">
        <form onSubmit={handleSubmit} autoComplete="off">
          <div className="mb-3 mt-3">
            <label for="user">Username:
              <input 
                type="text" 
                className="form-control"
                name='uname'
                required/>
                {renderErrorMessage("uname")}
            </label>
          </div>
          <div className="mb-3">
            <label for="user">Password:
              <input 
                type="text" 
                className="form-control"
                name="pass"
                required/>
                {renderErrorMessage("pass")}
            </label>
          </div>
          <button type="submit" className="btn btn-secondary">Submit</button>
          <a href='/register' className='btn btn-secondary' >Dont have an account?</a>
        </form>
      </div>
    </div>

  );
  return (
    <div className='text-center text-white'>
      <div className='form'>
        
        {isSubmitted ? <div>User is successfully logged in</div> : pageForm}
      </div>
    </div>
  );
}


export default Login;