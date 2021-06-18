import { Button } from 'bootstrap';
import React from 'react'
import { Link } from 'react-router-dom';
import './Header.css';


function Header() {
    return (
        <div className= "header d-flex ">
            
            <div className= "name mr-auto p-2 mt-2">Ciurea Gabriela</div>
            
           <div className= "d-flex justify-content-end">
              <Link to='/'className=''>
              <div className =' home mr-5 mt-3'> Home</div> 
              </Link>
              <Link to='/about'className>
              <div className =' about mr-5 mt-3'> About</div>
              </Link>
              <Link to='/projects'className>
              <div className =' projects mr-5 mt-3'> Projects</div>
              </Link>
              <Link to='/contact'className>
               <div className ='contact mr-5 mt-3'> Contact</div>
               </Link>
               <Link to='/resume'className>
              <div className ='resume mr-5 mt-3'> Resume</div>
              </Link>



             </div>


        </div>
    )
}

export default Header
