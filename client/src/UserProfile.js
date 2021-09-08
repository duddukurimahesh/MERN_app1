import React, {useState, useEffect} from 'react';
import { Redirect, Link } from 'react-router-dom';
import axios from 'axios';

const UserProfile = ({match}) => {

    const [user_reviews, setUser_reviews] = useState([]);

    useEffect(()=>{

        axios.get('http://localhost:5001/freelancerReviews', {
            headers: {
                'authToken': localStorage.getItem('authToken')
            },
            params: {
                email: match.params.email
            }
        })
        .then(res => {
            console.log('freelancer Reviews succ resp: ', res);
            setUser_reviews(res.data)
        })
        .catch(err => {
            console.log('freelancer Reviews err resp: ', err);
        })

    }, [])

    if(!localStorage.getItem('authToken')){
        return <Redirect to="/login"/>
    }

    return (
        <div>
            <nav>
                <br/>
                <button> <Link to="/dashboard">Go back to Dashboard</Link></button>
                <br/>
                <br/>
                <button><Link to="/login" onClick={()=> localStorage.removeItem('authToken')}>LogOut</Link></button>
            </nav>
            <h1> I am from User Profile component.</h1>
            <h3>{match.params.firstName}</h3>
            <h3>{match.params.lastName}</h3>
            <h3>{match.params.email}</h3>
            <h3>{match.params.mobileNum}</h3>
            <h3>{match.params.skills}</h3>

            <hr/>

            <h2>Reviews are:</h2>
            {user_reviews.map(review => <div style={{backgroundColor: '0b99a5'}}>

                    <p>Rating: <b>{review.rating}</b></p>
                    <p>Comments: <b>{review.comments}</b></p>
                    <p>workProvider: <b>{review.workProvider}</b></p>

                </div>
            )}

        </div>
    )
}
export default UserProfile;