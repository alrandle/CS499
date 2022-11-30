import { Outlet, Link } from "react-router-dom";
import logo from '../logo.svg';
import './css/layout.css';

const Layout = () => {
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
            <Link to="/mongo"><button className = 'btn btn-secondary'>MongoDB</button></Link>
          </li>
        </ul>
      </nav>
      </div>

      <Outlet />
    </>
  )
};

export default Layout;