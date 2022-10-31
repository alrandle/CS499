import React from 'react';

import User from '../schema/User.js'

// getting-started.js
const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost/quiz");

/*
async function run(){
  const user = await User.create({name: "Daniel Kasnick", user: "dkasnick", password: "test"})
  user.save()
  console.log(user)
}
*/


//run().catch(err => console.log(err));

function Mongo(){
  run()
  return(
    <div className='text-center text-white'>
      <h1>Mongo Test</h1>
    </div>

  );
}
  
export default Mongo;