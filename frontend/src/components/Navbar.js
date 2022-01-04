import React from 'react';
import { useNavigate } from 'react-router-dom'

function Navbar() {
    
    const navigate = useNavigate()
    const handleLogout = async () => {
        document.cookie = "auth-token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
        navigate('/')
    }

    return (

        <nav className="navbar navbar-expand-lg navbar-light bg-primary">
            <div className="container-fluid">
                <a className="navbar-brand text-light" href="/">Note Keeper</a>
                <div className="nav justify-content-end">
                    <div className="navbar-nav ml-3">
                        <a className="nav-link active text-light" aria-current="page" href="/">Home</a>
                        <a className="nav-link text-light" href="/login">Login</a>
                        <a className="nav-link text-light" href="/signup">Signup</a>
                        <button onClick={handleLogout} className="btn btn-danger">Logout</button>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
