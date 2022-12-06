import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import axios from 'axios';

import bcrypt from "bcryptjs-react";

class Test extends React.Component{



  render(){
    return(
      <div className='text-center text-white'>
        <h1>Daniels Test Page</h1>
        <p> Working on the student page </p>
      </div>
    );
  }
}

export default Test;
