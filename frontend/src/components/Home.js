import React from 'react'
import Login from './Login'
import Signup from './Signup'
import App from '../App.css'

function Home() {
    return (
        <div>
            <h1>The Note Keeper</h1>
            <h3>" Your Personal Note Taking App "</h3>
            <div className="login2 container overflow-hidden">
                <h4><b>Click Here To</b></h4>
                <div className="row gx-5">
                    <div className="col">
                        <div className="p-3 border bg-light">
                            <a href="/login"><b>Login</b></a>
                        </div>
                    </div>
                    <div className="col">
                        <div className="p-3 border bg-light">
                        <a href="/signup"><b>Signup</b></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
