import React, {useState, useEffect} from 'react'
import {Link, Redirect} from 'react-router-dom';
import axios from 'axios';

const Dashboard = () => {

    const [data, setData] = useState([]);
    useEffect(() =>{
        axios.get('http://localhost:5001/userssList', {
            headers: { 'authToken': localStorage.getItem('authToken') }
        })
        .then(res => {
            console.log("Users List---", res);
            setData(res.data)
        })
    },[])
    if(!localStorage.getItem('authToken')){
        return <Redirect to="/login"/>
    }

    return (
        <div>
            <nav>
                <h1>
                    Welcome to the MERN stack Dashboard Page.
                </h1>
                
                    <button> <Link to="/register">My Profile</Link></button>
                    <br></br>
                    <br></br>
                    <button> <Link to="/login" onClick = {()=> localStorage.removeItem('authToken')}>LogOut</Link></button>
                
            </nav>
            <div>
                {data.length>=1 ? 
                
                    data.map(profile => <div>
                        <h3>{profile.firstName}</h3>
                        <h3>{profile.lastName}</h3>
                        <h3>{profile.email}</h3>
                        <h3>{profile.mobileNum}</h3>
                        <h3>{profile.skills}</h3>
                        <br></br>
                        <hr></hr>


                    </div>)

                : <p>No profiles in our application.</p>}
            </div>

        </div>
    )
}
export default Dashboard;