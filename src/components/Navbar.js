import React from 'react';
import { Link } from 'react-router-dom';
import Login from './Login'

const Navbar = () => {
  
  return (

    <nav className='rtl p-4'>

      <div className='flex justify-between flex-row-reverse'>
        
        <div className='mx-4 space-x-4 flex flex-row-reverse'>

          <Link to="/" className="">logo</Link>

          <Link to="/" className="text-black">بيت</Link>

          <Link to="/About" className="text-black mx-4">عن</Link>

        </div>

          <div>

            <Link>
              
              <Login />
              
            </Link>

          </div>

      </div>

      <hr className='my-6 border-t-2 border-gray-400' />

    </nav>

  );

};

export default Navbar;
