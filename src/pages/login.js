import React from 'react';

function Login(){
  return(
    <div className='text-center text-white'>
      <h1>Login Test</h1>
      <div className="container mt-3">
        <form>
          <div className="mb-3 mt-3">
            <label for="user">User:
              <input 
                type="text" 
                className="form-control"/>
            </label>
          </div>
          <div className="mb-3">
            <label for="user">Password:
              <input 
                type="text" 
                className="form-control"/>
            </label>
          </div>
          
          <button type="submit" class="btn btn-secondary">Submit</button>
        </form>
      </div>
    </div>

  );
}
  
export default Login;