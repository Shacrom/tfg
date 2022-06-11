import React from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';


export const Navbar = () => {
    
    const navigate = useNavigate();

    const handleLogout = () => {
        navigate('/login', {
            replace: true
        });
    };
    
    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
            
            <Link 
                className="navbar-brand" 
                to="/"
            >
                WoWMap
            </Link>

            <div className="navbar-collapse">
                <div className="navbar-nav">

                    <NavLink 
                        className="nav-item nav-link" 
                        to="/characters"
                    >
                        Characters
                    </NavLink>

                    <NavLink 
                        className="nav-item nav-link"
                        to="/pets"
                    >
                        Pets
                    </NavLink>
                </div>
            </div>

            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2">
                <ul className="navbar-nav ml-auto">
                    <span className='nav-item nav-link text-info'>
                        Shacrom
                    </span>
                    <button 
                        className="nav-item btn" 
                        to="/login"
                        onClick={handleLogout}
                    >
                        Logout
                    </button>
                </ul>
            </div>
        </nav>
    )
}