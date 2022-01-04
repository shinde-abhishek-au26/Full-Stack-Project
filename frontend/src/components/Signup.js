import React, { useState } from 'react';
import axios from 'axios'
import {useNavigate} from 'react-router-dom'

function Signup() {

    const [loggedIn, setUserLoggedIn] = useState(false)
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [userId, setUserId] = useState('')
    const navigate = useNavigate()
    

    const handlePost = async (userData) => {
        try {
            const response = await axios.post('/api/signup', userData)
            console.log(response);
            setUserId(response.data.user)
            setUserLoggedIn(true)
        } catch (error) {
            console.log(error);
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const userData = {
            name : name,
            email : email,
            password : password
        }
        handlePost(userData)

    }

    if (loggedIn) {
        alert("Successfully Signed Up, Please login")
        navigate('/login')
    }
    

    const loginEL = <div style={{border: "2px solid green", borderRadius: "5px", display:'flex', flexFlow: "column", alignItems: "center", padding: "0.5em 1em"}}><h5>Sign Up Successful</h5><a href="/login">Click Here to Login</a></div>

    return (
        <div className="login container mt-5" style={{maxWidth:'500px'}}>
            {loggedIn && loginEL}
            <h3>Please Signup !!</h3>
            <form onSubmit={(e) => handleSubmit(e)}>
                <div className="container mt-3">
                    <label for="exampleFormControlInput1" className="form-label m-2">Your Fullname</label>
                    <input type="text" className="form-control" placeholder="name" onChange={(e) => setName(e.target.value)} />

                    <label for="exampleFormControlInput1" className="form-label m-2">Email</label>
                    <input type="email" className="form-control" placeholder="email" onChange={(e) => setEmail(e.target.value)} />

                    <label for="exampleFormControlInput1" className="form-label m-2">Password</label>
                    <input type="password" className="form-control" placeholder="password" onChange={(e) => setPassword(e.target.value)} />
                </div>
                <button type="submit" className="btn mt-3 btn-primary">SignUP</button>
            </form>

        </div>
    )
}

export default Signup;

