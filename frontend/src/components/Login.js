import axios from 'axios';
import React, { useState } from 'react';
import {  useNavigate } from 'react-router-dom'


function Login() {

    const [loggedIn, setLoggedIn] = useState(false)
    const [LogError, setLogError] = useState(false)
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [userId, setUserId] = useState('')
    const navigate = useNavigate()


    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = {
            email: email,
            password: password
        }

        try {
            const response = await axios.post('/api/login', data)
            const token = response.data.token
            if (token) {
                setUserId(response.data.user)
                setLoggedIn(true)
            }
        } catch (error) {
            setLogError(true)
        }

    }

    if (loggedIn) {
        navigate('/notes', {state: {user: userId}})
    }

    return (
        <div className="login container mt-5" style={{ maxWidth: '500px' }}>
            {LogError && <div><h5>Invalid Login or Password</h5></div>}
            <h3>Please Login!!</h3>
            <form onSubmit={(e) => handleSubmit(e)}>
                <div className="input-field">
                    <label for="exampleFormControlInput1" className="form-label m-2">Email address</label>
                    <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="enter your email" onChange={(e) => setEmail(e.target.value)} />

                    <label for="exampleFormControlInput1" className="form-label m-2">Password</label>
                    <input type="password" className="form-control" id="exampleFormControlInput1" placeholder="enter your password" onChange={(e) => setPassword(e.target.value)} />
                </div>
                <button type="submit" className="btn mt-3 btn-primary">Login</button>
            </form>

        </div>
    )
}

export default Login

