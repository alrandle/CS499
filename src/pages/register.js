import React, { useState } from 'react';

function Register(){
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (event) =>{ // use this to handle the submission from the form
    event.preventDefault() //don't touch this
    var { uname, fname, lname, pass } = document.forms[0];
    console.log(uname, pass)
    //find user --> this will change with database connection

    if (uname) { //shouldn't need to change this
      setIsSubmitted(true);
      if(setIsSubmitted){
        setTimeout(() => {
          window.open('/', "_self")
        }, 3000);
      }
    }
  }

  const pageForm = (
    <div className='text-center text-white'>
      <h1>Registration Test</h1>
      <div className="container mt-3">
        <form onSubmit={handleSubmit} autoComplete="off">
          <div className="mb-3 mt-3">
            <label for="username">username:
              <input 
                type="text" 
                className="form-control"
                name='uname'
                required/>
            </label>
          </div>
          <div className="mb-3 mt-3">
            <label for="firstname">firstname:
              <input 
                type="text" 
                className="m-2 form-control"
                name='fname'
                required/>
            </label>
            <label for="lastname">lastname:
              <input 
                type="text" 
                className="m-2 form-control"
                name='lname'
                required/>
            </label>
          </div>
          <div className="mb-3">
            <label for="user">Password:
              <input 
                type="password" 
                className="form-control"
                name='pass'
                required/>
            </label>
          </div>
          <a href='/login' className='btn btn-secondary' >Already a user?</a>
          <button type="submit" className="btn btn-secondary">Submit</button>
          
        </form>
      </div>
    </div>
  )
  return(
    <div className='text-center text-white'>
      <div className='form'>
        
        {isSubmitted ? <div>User is successfully created</div> : pageForm}
      </div>
    </div>
  );
}
  
export default Register;