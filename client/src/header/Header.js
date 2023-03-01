import React from 'react'
// import Currency from './Currency'
// import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import {Link, useNavigate} from 'react-router-dom';
import CurrencySelector from './CurrencySelector'
import Help from './Help'
import Language from './Language'
import Logo from './Logo'
import Supplier from './Supplier'
import Login from './user-account/Login'
import SignUp from './user-account/SignUp'

export default function header() {
    const auth = localStorage.getItem('user')

    const logout = () => {
        // console.log("logout")
        localStorage.clear()
    }

    // const navigate = useNavigate();

  return (
    <header>
        <nav className="header-container">
            <div className="header-logo-container">
                <div className="logo-container">
                    <Logo/>
                </div>    
            </div>
            <div className="header-menu-container">
                <ul className="navigation-menu">
                
                    <li className="menu-item"><Language/></li>
                    <li className="menu-item"><CurrencySelector/></li>
                    <li className="menu-item">
                        <Link to='/help' className='help'>
                            Help
                        </Link>
                    </li>
                    <li className="menu-item"><Supplier/></li>

                    {
                    auth ? <li><Link onClick={logout} to='/signup' className='signup'>Logout</Link></li> :
                    <>
                        <li><Link to='/signup' className='signup'>Signup</Link></li>
                        <li><Link to='/login' className='login'>Login</Link></li>
                    </>
                    }

                    <li className="menu-item">
                        <Link to='/submission' className='listing'>
                            Add Listing
                        </Link>
                    </li>
                    
                </ul>
            </div>
        </nav>
    </header>
  )
}




{/* <li className="menu-item">
                        <Link to='/login' className='login'>
                            Login
                        </Link>
                    </li> */}
{/* <li className="menu-item">
    <Link to='/signup' className='signup'>
        Signup
    </Link>
</li> */}
                    
{/* <li className="menu-item"> {auth ? <Link onClick={logout} to='/signup' className='signup'>Logout</Link> :
<Link to='/signup' className='signup'>Signup</Link> }</li> */}