import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div style={{fontSize: '0.8rem', position: 'absolute', bottom: '0', left: '40%', textAlign: 'center'}}>
        <p>Criminal Justice Police Database | Developed by <Link to=''>W.I.N</Link></p>
        <p>Copyright. All rights reserved</p>
    </div>
  )
}

export default Footer