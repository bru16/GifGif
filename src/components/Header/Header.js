import React from 'react'
import './styles.css'
import { Link } from 'wouter'
import useUser from '../../hooks/useUser'

const Header = () => {

    const { isLogged, logout } = useUser();

    const handleLogout = (e) => {
        e.preventDefault();
        logout();
    }

    return (
        <div className="header">
            {isLogged ? <button className="header-btn" onClick={handleLogout}>Logout</button> : <Link to="/login">Login</Link>}
        </div>
    )
}

export default Header
