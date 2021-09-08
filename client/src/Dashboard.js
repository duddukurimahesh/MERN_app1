// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { Redirect, Link } from 'react-router-dom';
// const Dashboard = () => {

//     const [data, setData] = useState([]);

//     useEffect(() => {

//         axios.get('http://localhost:5001/usersList', {
//             headers: {
//                 'authToken': localStorage.getItem('authToken')
//             }
//         })
//         .then(res => {
//             console.log("API resp at usersList: ", res);
//             setData(res.data);
//             //another API call.
//         })
//         .catch(err => {
//             console.log('Err at usersList API: ', err);
//         })

//     }, []);

//     if(!localStorage.getItem('authToken')){
//         return <Redirect to="/login"/>
//     }

//     return (
//         <div>
//             <nav>
//                 <br/>
//                 <button> <Link to="/myprofile">My Profile</Link></button>
//                 <br/>
//                 <br/>
//                 <button><Link to="/login" onClick={()=> localStorage.removeItem('authToken')}>LogOut</Link></button>
//             </nav>

//             <h1>I am from Dashboard component after Login</h1>
//             <br/>
//             {data.map(userData => {
//                 return <div>
//                     <h3>{userData.firstName}</h3>
//                     <h3>{userData.lastName}</h3>
//                     <h3>{userData.skills}</h3>
//                     <button><Link to={`/userProfile/${userData.firstName}/${userData.lastName}/${userData.email}/${userData.mobileNum}/${userData.skills}`}>View Profile</Link></button>
//                     <hr/>
//                 </div>
                
//             })}
//         </div>
//     )

// }
// export default Dashboard;


import React, { useState, useEffect } from 'react'
import { Link, Redirect } from 'react-router-dom';
import axios from 'axios';
import image from './mahesh.png';

const Dashboard = () => {

    const [data, setData] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:5001/usersList', {
            headers: { 'authToken': localStorage.getItem('authToken') }
        })
            .then(res => {
                console.log("Users List---", res);
                setData(res.data)
            })
    }, [])
    if (!localStorage.getItem('authToken')) {
        return <Redirect to="/login" />
    }

    return (
        <div>

            <div style={{ width: '100%', height: '100px', backgroundColor: '#0b99a5', marginTop: '-20px' }}>



                <div style={{ backgroundColor: 'tamota', textAlign: 'cente', lineHeight: '93px', width: '270px', height: '100px' }}>
                    <h1 style={{ color: 'white', fontSize: '28px', marginLeft: '10px', fontFamily: "sans-serif" }}><button><a href="http://localhost:3000/">Freelancer</a></button></h1>
                </div>

                <div style={{ marginLeft: "82%", lineHeight: '88px', marginTop: '-120px', fontSize: '13px' }}>
                    <h1 style={{ marginTop: '30px', height: '77px', width: '80px', textAlign: 'center', }}> <button><Link to="/register">My Profile</Link></button></h1>
                </div>

                <div style={{ marginLeft: "90%", lineHeight: '197px', marginTop: '-164px', fontSize: '13px' }}>

                    <h1 style={{ marginTop: '30px', height: '77px', width: '74px', textAlign: 'center' }} >  <button> <Link to="/login" onClick={() => localStorage.removeItem('authToken')}>LogOut</Link></button></h1>
                </div>


            </div>

            <div>
                <h1 style={{ fontSize: '24px', lineHeight: '44px', border: ' 1px solid rgb(255 255 255)', width: '600px', height: '50px', backgroundColor: '#bdb5b5', textAlign: 'center', marginTop: '5%', marginLeft: '29%', boxShadow: 'rgb(15 34 43) 10px 10px 14px', fontFamily: 'emoji' }}>Our top Freelancers profiles are waiting for you.</h1>
            </div>
            <div>


                {data.length >= 1 ?

                    data.map(profile => <div style={{ overflow: 'hidden', width: '600px', height: '300px', backgroundColor: '#fffff', marginLeft: '29%', marginTop: '4%', boxShadow: 'rgb(52 46 103) 16px 10px 35px 0px' }} >
                        <img src={image} style={{ width: '120px', height: '119px', borderRadius: '122px', marginTop: '39px', marginLeft: '14px', border: '1px solid #e6e6ef' }} />
                        <div style={{ overflow:'hidden',marginLeft: '179px', marginTop: '-151px', fontSize: '16px', fontFamily: 'ui-sans-serif' }}>
                            <pre><span style={{fontSize :'19px',fontFamily:'serif'}}>FirstName :&nbsp;&nbsp;</span>{profile.firstName}</pre>
                            <pre><span  style={{fontSize :'19px',fontFamily:'serif'}}>LastName :&nbsp;&nbsp;</span>{profile.lastName} </pre>
                            <pre><span  style={{fontSize :'19px',fontFamily:'serif'}}>Email :&nbsp;&nbsp;</span>{profile.email}</pre>
                            <pre><span style={{fontSize :'19px',fontFamily:'serif'}}>MobileNum :&nbsp;&nbsp;</span>{profile.mobileNum}</pre>
                            <pre><span style={{fontSize :'19px',fontFamily:'serif'}}>skills :&nbsp;&nbsp;</span>{profile.skills}</pre>
                            <button><Link to={`/userProfile/${profile.firstName}/${profile.lastName}/${profile.email}/${profile.mobileNum}/${profile.skills}`}>View Profile</Link></button>

                        </div>

                    </div>)

                    : <p>No profiles in our application.</p>}
            </div>

        </div>
    )
}
export default Dashboard;