import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Redirect, Link} from 'react-router-dom';

const Myprofile = () => {
    const [data, setData] = useState({});
    const [reviews, setReviews] = useState([]);

    useEffect(() => {

        axios.get('http://localhost:5001/myProfile', {
            headers: {
                'authToken': localStorage.getItem('authToken')
            }
        })
        .then(res => {
            console.log("My profile API resp at myProfile: ", res);
            setData(res.data);
            axios.get('http://localhost:5001/reviewsToMe', {
                headers: {
                    'authToken': localStorage.getItem('authToken')
                }
            })
            .then(reviewsToMe => {
                console.log('Review received by the Logged In user :', reviewsToMe);
                setReviews(reviewsToMe.data);
            })
            // Need to implement reviews call.
        })
        .catch(err => {
            console.log('Err at usersList API: ', err);
        })

    }, []);

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
            <h1> This is from my Profile page. </h1>
            <br/>
            <h3>{data.firstName}</h3>
            <h3>{data.lastName}</h3>
            <h3>{data.email}</h3>
            <h3>{data.mobileNum}</h3>
            <h3>{data.skills}</h3>
            <hr/>
            {reviews.map(obj=> <div>
                <p>{obj.workProvider}</p>
                <p>{obj.rating}</p>
                <p>{obj.comments}</p>
            </div>)}

        </div>
    )

}
export default Myprofile;