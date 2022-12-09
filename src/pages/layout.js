/* layout.js
 * This page is responsible for creating the actual navigation bar at the top of the page
 * The navbar changes based on the login status of a person on the client
 * Any changes to the navbar should be made here 
 * 
 * Daniel
 */

import { Outlet, Link } from "react-router-dom";
import './css/layout.css';

const Layout = () => {
  // If email or username is blank
  if(localStorage.getItem('email') == null || localStorage.getItem('username') == null){
    // Load buttons
    return (
      <>
      <div className="">
        <nav>
          <ul className='btn-group'>
            <li>
              <Link to="/"><button className='btn btn-outline-light'>Home</button></Link>
            </li>
            <li>
              <Link to="/login"><button className = 'btn btn-outline-light'>Login</button></Link>
            </li>
            <li>
              <Link to="/register"><button className = 'btn btn-outline-light'>Register</button></Link>
            </li>
          </ul>
        </nav>
        </div>
  
        <Outlet />
      </>
    )
  }
  // Email and username not blank
  else{
    // Show logout button instead of login
    return (
      <>
      <div className="btn-group">
        <nav>
          <ul className='btn-group btn-group'>
            <li>
              <Link to="/"><button className = 'btn btn-outline-light'>Home</button></Link>
            </li>
            <li>
              <Link to="/dashboard"><button className = 'btn btn-outline-light'>Dashboard</button></Link>
            </li>
            <li>
              <Link to="/logout"><button className = 'btn btn-outline-light'>Logout</button></Link>
            </li>
          </ul>
        </nav>
        </div>
  
        <Outlet />
      </>
    )
  }

};

export default Layout;