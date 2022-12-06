import React from 'react';
import logo from '../logo.svg';

class Home extends React.Component{
  render(){
    return(
      <div className='text-center text-white'>
        <h1>Welcome</h1>
        <img src={logo} className="App-logo" alt="logo" />
        <h2>To get started, please login</h2>
        <br></br><br></br>
        <p>This project was created by</p>
        <p>-Daniel Kasnick</p>
        <p>-Alex Randle</p>
        <p>-Enrique Orzuna</p>
        <p>-Justin Guieb</p>
        <p>-Kyler Clark</p>
      </div>

    );
  }
}
  
export default Home;