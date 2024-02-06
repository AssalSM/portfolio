import React from 'react';
import  './footer.css';


const Footer = () => {
  return (<footer className='flex'>
  
  <div>
 <ul className='flex' >
          <li>
            <a href="">about</a>
          </li>
          <li>
            <a href="">articles</a>
          </li>
          <li>
            <a href="">projects</a>
          </li>
          <li>
            <a href="">speaking</a>
          </li>
          <li>
            <a href="">contact</a>
          </li>
        </ul>
  </div>
  <p>© 2024 Spencer Sharp. All rights reserved.</p>
  
  </footer>);
};


export default Footer;