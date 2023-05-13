import React, { useEffect } from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom';

const Nav = () => {
    const auth = localStorage.getItem('user');
    const navigate = useNavigate();
    const logout = () => {
        localStorage.clear();
        navigate('/signup');
    }
    return (
        <div>
            <img
            alt="logo"
            className='logo'
             src="/atul.png" />
            

                {auth ?
                    <ul className="nav-ul">
                        <li><Link to="/">Products</Link></li>
                        <li><Link to="/add">Add Products</Link></li>
                        <li><Link to="/update">Update Product</Link></li>
                        <li><Link to="/profile">Profile</Link> </li>
                        <li><Link onClick={logout} to="/signup">Logout({JSON.parse(auth).name})</Link></li>
                    </ul>
                    :
                    <ul className="nav-ul nav-right">

                        <li> <Link to="/Signup">Signup</Link></li>
                        <li><Link to="/Login">Login</Link></li>
                    </ul>

            }
        </div>
    )
}
export default Nav;