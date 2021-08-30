import React from 'react'
import {Link} from 'react-router-dom';

const Home = () => {

    return (
        <div>
            
            <nav>
                <h1>
                    Welcome to the MERN stack Project
                </h1>
                
                    <button> <Link to="/register">Register</Link></button>
                    <br></br>
                    <br></br>
                    <button> <Link to="/login">Login</Link></button>
                
            </nav>

        </div>
    )
}
export default Home;