import { Outlet, Link } from "react-router-dom";
import logo from '../logo.svg';
import './css/layout.css';

const Layout = () => {
  if(localStorage.getItem('email') == null || localStorage.getItem('username') == null){
    return (
      <>
      <div className="btn-group">
        <nav>
        <img src={logo} alt="logo" width='10%' />
          <ul className='btn-group btn-group-lg'>
            <li>
              <Link to="/"><button className = 'btn btn-secondary'>Home</button></Link>
            </li>
            <li>
              <Link to="/login"><button className = 'btn btn-secondary'>Login</button></Link>
            </li>
            <li>
              <Link to="/register"><button className = 'btn btn-secondary'>Register</button></Link>
            </li>
          </ul>
        </nav>
        </div>
  
        <Outlet />
      </>
    )
  }else{
    return (
      <>
      <div className="btn-group">
        <nav>
        <img src={logo} alt="logo" width='10%' />
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
            <li>
              <Link to="/test"><button className = 'btn btn-secondary'>Daniels Test Page</button></Link>
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