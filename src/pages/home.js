import React from 'react';
import logo from '../logo.svg';

class Home extends React.Component{
  render(){
    return(
      <div className='text-center text-white'>
        <h1>Quiz App</h1>
        <img src={logo} className="App-logo" alt="logo" />
      </div>

    );
  }
}
  
export default Home;