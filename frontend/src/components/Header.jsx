import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div>
        <Link to='/'>CJPD</Link>
        <ul>
            <li><Link to='/login'>Login</Link></li>
            <li><Link to='/register'>Register</Link></li>
        </ul>
    </div>
  )
}

export default Header