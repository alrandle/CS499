import React from 'react';
import axios from 'axios';

class Register extends React.Component{

  state = {
    username: '',
    firstname: '',
    lastname: '', 
    passwrd: '',
    posts: []
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

  handleRegsitrationForm = (event) =>{
    event.preventDefault();

    const payload = {
      username: this.state.username,
      password:{
        hash: this.state.passwrd,
        salt: this.state.passwrd,
      },
      name:{
        firstname: this.state.firstname,
        lastname: this.state.lastname,
      },
      email: this.state.email,
      role: "user",
      lastlogin: new Date()
    };

    axios({
      url: 'http://localhost:8080/api/register',
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
        <h1>Registration</h1>
        <div className="container mt-3">
          <form onSubmit={this.handleRegsitrationForm} autoComplete="off">
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
            <div className="mb-3 mt-3">
              <label>Firstname:
              <input 
                type="text" 
                className="m-2 form-control"
                name='firstname'
                placeholder='John'
                value={this.state.firstname}
                onChange={this.handleEventUpdate}
                required/>
              </label>
              <label>Lastname:
              <input 
                type="text" 
                className="m-2 form-control"
                name='lastname'
                placeholder='Doe'
                value={this.state.lastname}
                onChange={this.handleEventUpdate}
                required/>
              </label>
            </div>
            <div className="mb-3">
              <label>eMail:
              <input 
                type="email" 
                placeholder='placeholder@example.com'
                className="form-control"
                name='email'
                value={this.state.email}
                onChange={this.handleEventUpdate}
                required/>
              </label>
            </div>
            <div className="mb-3">
              <label>Password:
              <input 
                type="password" 
                className="form-control"
                name='passwrd'
                value={this.state.passwrd}
                onChange={this.handleEventUpdate}
                required/>
              </label>
            </div>
          <a href='/login' className='btn btn-secondary' >Already a user?</a>
          <button type="submit" className="btn btn-secondary">Submit</button>
        </form>
      </div>
    </div>
    );
  }
}

export default Register;

  /*
  function asdf(){
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
    }*/