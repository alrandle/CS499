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
      <div className="btn-group">
        <nav>
          <ul className='btn-group btn-group-lg'>
            <li>
              <Link to="/"><button className = 'navBtn'>Home</button></Link>
            </li>
            <li>
              <Link to="/login"><button className = 'navBtn'>Login</button></Link>
            </li>
            <li>
              <Link to="/register"><button className = 'navBtn'>Register</button></Link>
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
          <ul className='btn-group btn-group-lg'>
            <li>
              <Link to="/"><button className = 'btn btn-secondary'>Home</button></Link>
            </li>
            <li>
              <Link to="/dashboard"><button className = 'btn btn-secondary'>Dashboard</button></Link>
            </li>
            <li>
              <Link to="/logout"><button className = 'btn btn-secondary'>Logout</button></Link>
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